---
title: Data source
description: ...
---

Data source can be created for each new graphics file and it cannot be shared across multiple graphics files.

## Create a new data source

Click on the data source below the objects panel. A new data source pop-up window opens. There are three steps to creating a new data source:
1. **Data source specification** to specify the data source
2. **Loaded document data** to verify the loaded document data
3. **Data selection** to select data attributes

### Step 1: Data source specification
Enter basic information about the new data source:
- **name** - name of the data source
- **slug** - and unique short name. We recommend using a few characters. The uniqueness is checked for all graphic files of all users.
- **URL** - URL to the origin of the data source
- **type** - select XML or JSON according to the format of the data source origin
- **Data source refresh** option - if true, the data source will refresh its data at the specified time (in seconds). the refresh is visualized with a green label on the timeline stamps.
Confirm with the Next button.

### Step 2: Loaded document data
If the data source document is loaded successfully, it is displayed in the preview. If not, an error informs you that the data loading has failed.
Confirm with the Next button or go back to check the first step.

### Step 3: Data selection
In the left column, there are parsed data in a structured tree. You can select data attributes using the plus button. These attributes appear in the right column. Selected attributes can be renamed to a custom name, reordered, or removed. The custom name must be unique within the data source.
Confirm with the Save button or go back to check the previous steps.

## Edit and delete data source
Newly created data sources appear in the Data Sources panel, just below the Objects panel. It can be viewed or edited by left-clicking or removed by right-clicking and choosing Delete. 

## Use data source attributes

### Text fields
Create a text from the Objects panel and insert an attribute into the value of the text object using a drop-down list in the right-side Objects settings panel. An attribute is inserted in the format `{slug/custom-name}`. Multiple attributes can be inserted into a text value.

### Images
Create a new image from the Objects panel. Choose the Insert image URL option. Enter the URL or select an attribute from the drop-down list. Confirm with the Create button. To edit the image source, select the image and click Replace image in the Image section of the right-side panel.