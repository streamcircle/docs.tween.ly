---
title: Data Source & API Control
description: How to connect graphics to external data sources and control them via API commands in Tweenly.
---

Tweenly graphics can be connected to structured **data feeds** (JSON, XML, TXT) or controlled via **API commands** from a playout or automation system.  
- **Data Sources** allow you to load external content (text, images, tickers) dynamically.  
- **API Control** lets you update text and images in real time during playback.  

No scripting is required — values are applied automatically when playback reaches the relevant objects.

:::note
Data Sources are available in both Free and Unlimited plans. In the **Free plan**, Data Sources can be created and used, but **API control of text and images is not included in exports**. In the **Unlimited plan**, both **Data Sources and API control are fully supported in exports** (HTML and ZIP package).  
:::

## Data Sources Overview

A **Data Source** is an asset that allows you to dynamically load external data into graphics files.  
Since Data Sources are **workspace assets**, they can be reused across multiple graphics files within the same workspace.

:::caution
If a Data Source is edited in one graphics file, the changes automatically apply to all other graphics files using the same Data Source.
:::

## Creating a Data Source

1. In the **Objects Panel**, click **Data Source**.  
2. A new data source setup window will appear.  
3. Complete the three-step process:  

### Step 1: Data source specification
- **Name** – The name of the data source.  
- **Slug** – A unique identifier. 🚨 Must be unique across the workspace.  
- **URL** – Link to the source (JSON or XML).  
- **Type** – Select the format (XML or JSON).  
- **Refresh option** – Enable automatic refresh at a specified interval (seconds). A green label on the timeline indicates refresh events.  

Click **Next** to continue.  

### Step 2: Loaded document data
- If loading succeeds, a preview of the document appears.  
- If loading fails, an error message is shown.  

Click **Next** to proceed or **Back** to review Step 1.  

### Step 3: Data selection
- Parsed data is displayed as a structured tree in the left column.  
- Select attributes with the **+ button**.  
- Selected attributes appear in the right column, where they can be:  
  - **Renamed** (must be unique within the Data Source).  
  - **Reordered** for easier access.  
  - **Removed** if not needed.  

Click **Save** to finalize the Data Source.  

![Data source](../../../assets/data-source/data-source-refresh.png)

## Editing a Data Source

- Editing a Data Source in one file affects all files in the same workspace.  
- Existing graphics do not update automatically — you must **manually reapply modified attributes**.  

To edit:  
1. Open the **Data Sources Panel** (below the Objects Panel).  
2. Left-click the Data Source to open its settings.  
3. Modify details and **Save**.  
4. Manually update graphics that use the Data Source to apply changes.  

:::caution
Changes apply across the workspace, but each file must be manually updated to reflect modifications correctly.
:::

## Deleting a Data Source

A Data Source can only be deleted if it is not used in any graphics file.  

1. Open the **Data Sources Panel**.  
2. Right-click the Data Source and select **Delete**.  

## Using Data Source Attributes

### In Text Fields
1. **Create a Text Object** from the Left Sidebar.  
2. In the **Right Sidebar > Text & Font section**, use the **drop-down list** to insert an attribute.  
   - Attributes appear in the format `{slug/custom-name}`.  
3. Multiple attributes can be combined with plain text.  

:::tip
Attributes can be mixed with other static text in the same field.
:::

### In Images
1. **Create a New Image** from the Left Sidebar.  
2. Choose **Insert URL**.  
3. Enter a static URL or select a Data Source attribute from the drop-down list.  
4. Click **Create**.  

To update the image source:  
1. Select the image.  
2. In the **Right Sidebar > Image section**, click **Replace image**.  
3. Choose a new static URL or a Data Source attribute.  

## API Control

In addition to static Data Sources, Tweenly graphics can also be updated by **API commands**.  
- A playout or automation system can send values (text, images, ticker entries) in real time.  
- Input values are applied instantly during playback.  
- No manual coding or scripting is required — the binding between API input and object fields is done in the editor.  

## Benefits

- Centralized management of external data.  
- Real-time updates without re-exporting graphics.  
- Flexible integration with playout and automation systems.  

