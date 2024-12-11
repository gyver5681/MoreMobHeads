// Register an Addon
// ExtLootTables:registerAddon CallbackNamespace Callback.ID
// CallbackNamespace:registerAddonResponse { "rc": 0 }

// Add a Loot Entry
// ExtLootTables:addLootEntry callback.ID minecraft:slime { "rolls": 1, "entries": [ { "type": "item", "name": "moremobheads:slime_head", "weight": 1 } ], "conditions": [ { "condition": "killed_by_player" }, { "condition": "random_chance_with_looting", "chance": 0.925, "looting_multiplier": 0.02 } ] }
// CallbackNamespace:AddLootEntryResponse { "rc": returncode }

import { debuglog } from "./main";
import { world, system, ScriptEventCommandMessageAfterEvent, ScriptEventSource } from "@minecraft/server";
import { MinecraftDimensionTypes } from "@minecraft/vanilla-data";
import * as LootTables from "./lootTables";

// Constants
// Namespace we're listening for for callbacks.
const EventNamespace: string = "MoreMobHeads";
const CallbackRegisterResponse: string = `${EventNamespace}:registerAddonResponse`;
const CallbackAddLootEntryResponse: string = `${EventNamespace}:AddLootEntryResponse`;
const CallbackVexCharging: string = `${EventNamespace}:vexcharging`;

// RequestID generated randomly when the server loads so other addons can't just send requests on our behalf.
const EventRequestID: string = `${Math.floor(Math.random() * 100000000)}`;

//ExtendedLootTable command lits
const ELTEventNamespace: string = "ExtLootTables";
const ELTregisterAddon: string = `${ELTEventNamespace}:registerAddon`;
const ELTaddLootEntry: string = `${ELTEventNamespace}:addLootEntry`;

function SendCommand(command: string): void {
  if (debuglog) {
    console.warn(`MMH: sending command (${command}) Length: ${command.length}`);
  }
  world.getDimension(MinecraftDimensionTypes.Overworld).runCommandAsync(command);
  if (debuglog) {
    console.warn("MMH: command sent");
  }
}

function SendLootTable(pool: LootTables.LootTablePool): void {
  SendCommand(
    `scriptevent ${ELTaddLootEntry} ${EventRequestID} ${pool.entityTypeID} ${JSON.stringify(
      JSON.parse(pool.lootTablePool)
    )}`
  );
}

function ExtLootTableEventHandler(event: ScriptEventCommandMessageAfterEvent): void {
  if (event.sourceType === ScriptEventSource.Server) {
    switch (event.id) {
      case CallbackRegisterResponse: {
        if (debuglog) {
          console.warn(`MMH: CallbackRegisterResponse: ${event.message}`);
        }
        system.runTimeout(() => {
          let nextPool = LootTables.GetNextPool();
          if (nextPool) SendLootTable(nextPool);
        }, 20);
        break;
      }
      case CallbackAddLootEntryResponse: {
        if (debuglog) {
          console.warn(`MMH: CallbackAddLootEntryResponse: ${event.message}`);
        }
        system.run(() => {
          let nextPool = LootTables.GetNextPool();
          if (nextPool) SendLootTable(nextPool);
        });
        break;
      }
    }
  }
  if (event.id === CallbackVexCharging) {
    if (event.sourceEntity) {
      if (event.message === "1") {
        event.sourceEntity.addTag("IsCharging");
      } else {
        event.sourceEntity.removeTag("IsCharging");
      }
    }
  }
}

export function InitLootTables(): void {
  system.afterEvents.scriptEventReceive.subscribe(ExtLootTableEventHandler, { namespaces: [EventNamespace] });
  LootTables.BuildLootTableArray();
  // Register with the ExtendedLootTables addon
  system.runTimeout(() => {
    SendCommand(
      `scriptevent ${ELTregisterAddon} { "callbackNamespace": "${EventNamespace}", "callbackID": "${EventRequestID}" } `
    );
  }, 20);
}
