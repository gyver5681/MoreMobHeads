
$SourceEntitiesFolder = "C:\Projects\MCAddons\stable\sources\more mob heads v2.14.2 (MC 1.21-1.21.3)\data\more_mob_heads\loot_table\entities"
$OutputProjectRoot = "C:\Projects\MCAddons\stable\MoreMobHeads"
$OutputLogFile = "$($OutputProjectRoot)\output.log"
$BlockTemplateFile = "$($OutputProjectRoot)\blocks.txt"

$OutputItemLangFile = "$($OutputProjectRoot)\tempItemLang.txt"
$OutputTileLangFile = "$($OutputProjectRoot)\tempTileLang.txt"



$OutputBPFolder = "$($OutputProjectRoot)\behavior_packs\more-mob-heads"
$OutputRPFolder = "$($OutputProjectRoot)\\resource_packs\more-mob-heads"

# Output Behavior Pack Folders
$OutputBpBlocksFolder = "$($OutputBPFolder)\blocks"
$OutputBpItemsFolder = "$($OutputBPFolder)\items"
$OutputBpBlocksLootTableFolder = "$($OutputBPFolder)\loot_tables\blocks"

# Output Resource Pack Folders
$OutputRpAttachablesFolder = "$($OutputRPFolder)\attachables"
$OutputRpBlockTexturesFolder = "$($OutputRPFolder)\textures\blocks"
$OutputRpAttachableTexturesFolder = "$($OutputRPFolder)\textures\entity\attachable"

# Specific files to update/append
$OutputRpTexts = "$($OutputRPFolder)\texts\en_US.lang"
$OutputRpTerrainTextures = "$($OutputRPFolder)\textures\terrain_texture.json"
$OutputRpBlocks = "$($OutputRPFolder)\blocks.json"

# Schema Format Versions
$FormatVersionBlocks = "1.21.40"
$FormatVersionAttachable = "1.10.0"
$FormatVersionItem = "1.21.40"

$ReplaceLitBlockFormatVersion = "BLOCK_FMT_VER"
$ReplaceLitItemName = "ITEM_NAME"



# JSON Snippits
$BlocksJsonHeader = "{`n  ""format_version"": ""$($FormatVersionBlocks)"","

$TerrainTexturesHeader = "{`n  ""resource_pack_name"": ""vanilla"",`n  ""texture_name"": ""atlas.terrain"",`n  ""padding"": 8,`n  ""num_mip_levels"": 4,`n  ""texture_data"": {"

function DownloadSkin {
  param(
    $SkinUrl,
    $ItemName
  )
  $SkinUrl = Get-Variable -Name "SkinUrl" -Scope Global
  $ItemName = Get-Variable -Name "ItemName" -Scope Global
  $TrimmedItemName = $ItemName.Value.Trim('`"')
  $CleanedItemName = ($TrimmedItemName).Replace(" ", "_").ToLower()
  $ItemFileName = "$($CleanedItemName).png"
  $OutFilePath = "$($OutputRpAttachableTexturesFolder)\$($ItemFileName)" 
  Invoke-WebRequest -Uri $SkinUrl.Value -Method Get -OutFile $OutFilePath 

  Set-Variable -Name "SkinUrl" -Value "" -Scope Global
  Set-Variable -Name "ItemName" -Value "" -Scope Global
  return $TrimmedItemName
}

function BuildItemSet {
  param(
    $ItemName
  )
  $CleanedItemName = ($ItemName).Replace(" ", "_").ToLower()
  ## Resource Pack
  $ItemFileName = "$($CleanedItemName).png"
  Copy-Item -Path "$($OutputRpAttachableTexturesFolder)\$($ItemFileName)" -Destination "$($OutputRpBlockTexturesFolder)\$($ItemFileName)"
  if ($CleanedItemName -eq "zombified_piglin_head") {
    Add-Content -Path $OutputRpBlocks -Value "  ""$($CleanedItemName)_block"": { ""sound"": ""stone"", ""textures"": ""$($CleanedItemName)"" }"
    Add-Content -Path $OutputRpTerrainTextures -Value "    ""$($CleanedItemName)"": { ""textures"": ""textures/blocks/$($CleanedItemName)"" }"
  }
  else {
    Add-Content -Path $OutputRpBlocks -Value "  ""$($CleanedItemName)_block"": { ""sound"": ""stone"", ""textures"": ""$($CleanedItemName)"" },"
    Add-Content -Path $OutputRpTerrainTextures -Value "    ""$($CleanedItemName)"": { ""textures"": ""textures/blocks/$($CleanedItemName)"" },"
  }
  Add-Content -Path $OutputItemLangFile -Value "item.moremobheads:$($CleanedItemName)=$($ItemName)"
  Add-Content -Path $OutputTileLangFile -Value "tile.moremobheads:$($CleanedItemName)_block.name=$($ItemName) Block"
  Set-Content -Path "$($OutputRpAttachablesFolder)\$($CleanedItemName).attachable.json" -Value "{`n  ""format_version"": ""$($FormatVersionAttachable)"",`n  ""minecraft:attachable"": {`n    ""description"": {`n      ""identifier"": ""moremobheads:$($CleanedItemName)"",`n      ""render_controllers"": [""controller.render.armor""],`n      ""materials"": {`n        ""default"": ""entity_alphatest"",`n        ""enchanted"": ""entity_alphatest_glint""`n      },`n      ""textures"": {`n        ""default"": ""textures/entity/attachable/$($CleanedItemName)"",`n        ""enchanted"": ""textures/misc/enchanted_item_glint""`n      },`n      ""geometry"": {`n        ""default"": ""geometry.more_mob_head""`n      }`n    }`n  }`n}"
  Set-Content -Path "$($OutputBpBlocksLootTableFolder)\$($CleanedItemName).json" -Value "{`n  ""pools"": [{ ""rolls"": 1, ""entries"": [{ ""type"": ""item"", ""name"": ""moremobheads:$($CleanedItemName)"" }] }]`n}"

  ## Behavior Pack
  (Get-Content -Path $BlockTemplateFile) |
  ForEach-Object { ($_).replace($ReplaceLitBlockFormatVersion, $FormatVersionBlocks).replace($ReplaceLitItemName, $CleanedItemName) } |
  Set-Content -Path "$($OutputBpBlocksFolder)\$($CleanedItemName).json"

  Set-Content -Path "$($OutputBpItemsFolder)\$($CleanedItemName).item.json" -Value "{`n  ""format_version"": ""$($FormatVersionItem)"",`n  ""minecraft:item"": {`n    ""description"": {`n      ""identifier"": ""moremobheads:$($CleanedItemName)"",`n      ""menu_category"": {`n        ""category"": ""items"",`n        ""group"": ""itemGroup.name.skull""`n      }`n    },`n    ""components"": {`n      ""minecraft:max_stack_size"": 1,`n      ""minecraft:wearable"": {`n        ""slot"": ""slot.armor.head"",`n        ""protection"": 0`n      },`n      ""minecraft:block_placer"": { ""block"": ""moremobheads:$($CleanedItemName)_block"" }`n    }`n  }`n}"

}

function IterateProps {
  param (
    $ObjectIn,
    $ParentName,
    $TabCount
  )
  $ChildTabCount = $TabCount + 1
  $TexturesFound = $false
  foreach ($object_properties in $ObjectIn.PsObject.Properties) {
    if (($object_properties.value -is [System.Object[]]) -or ($object_properties.value -is [System.Management.Automation.PSCustomObject])) {
      "$("`t" * $TabCount)$($object_properties.name) [$($object_properties.value.GetType())]:" | Out-File -FilePath $OutputLogFile -Append
      foreach ($entry in $object_properties.value) {
        IterateProps -ObjectIn $entry -ParentName $object_properties.name -TabCount $ChildTabCount
      }
    }
    else {
      $EncodedString = ""
      $DecodedString = ""
      if (($TexturesFound -eq $true) -and ($ParentName -eq "properties") -and ($object_properties.name -eq "value")) {
        $EncodedString = $object_properties.value
        $DecodedString = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($EncodedString))
      }
      if (($ParentName -eq "SKIN") -and ($object_properties.name -eq "url")) {
        Set-Variable -Name "SkinUrl" -Value $object_properties.value -Scope Global
      }
      if (($ParentName -eq "components") -and ($object_properties.name -eq "minecraft:item_name")) {
        Set-Variable -Name "ItemName" -Value $object_properties.value -Scope Global
        $returnData = DownloadSkin
        BuildItemSet -ItemName $returnData

      }

      if ($DecodedString -eq "") {
        "$("`t" * $TabCount)$($object_properties.name) [$($object_properties.value.GetType())]: $($object_properties.value)"  | Out-File -FilePath $OutputLogFile -Append
        if (($ParentName -eq "properties") -and ($object_properties.name -eq "name") -and ($object_properties.value -eq "textures")) {
          $TexturesFound = $true
        }
      }
      else {
        "$("`t" * $TabCount)$($object_properties.name) [$($DecodedString.GetType())]:"  | Out-File -FilePath $OutputLogFile -Append
        $DecodedObj = $DecodedString | ConvertFrom-Json
        IterateProps -ObjectIn $DecodedObj -ParentName $object_properties.name -TabCount $ChildTabCount
      }
    }
    
  }

}

## Main Script
Set-Content -Path $OutputItemLangFile -Value ""
Set-Content -Path $OutputTileLangFile -Value ""
Set-Content -Path $OutputRpTexts -Value ""
Set-Content -Path $OutputRpBlocks -Value $BlocksJsonHeader
Set-Content -Path $OutputRpTerrainTextures -Value $TerrainTexturesHeader

Get-ChildItem -Path $SourceEntitiesFolder -Filter "*.json" | 
ForEach-Object { 
  $_.FullName | Out-File -FilePath $OutputLogFile -Append
  $x = (Get-Content -Raw $_.FullName | ConvertFrom-Json );
  IterateProps -ObjectIn $x -ParentName "root" -TabCount 0

}

Add-Content -Path $OutputRpBlocks -Value "}"
Add-Content -Path $OutputRpTerrainTextures -Value "  }`n}"

Get-Content -Path $OutputItemLangFile | Set-Content -Path $OutputRpTexts
Add-Content -Path $OutputRpTexts -Value "`n"
Get-Content -Path $OutputTileLangFile | Add-Content -Path $OutputRpTexts
