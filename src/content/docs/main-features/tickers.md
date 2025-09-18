---
title: Tickers
description: Overview of ticker objects, their types, properties, and behavior in Tweenly.
---

Tickers are **objects** commonly used for **news feeds, sports results, and other real-time information**. A ticker is a text element that continuously crawls or scrolls across the screen.  

:::note
Tickers **are available in Free and Unlimited** plans.
:::

## Types of Tickers

There are two main types of tickers:  

- **Crawl Tickers** – Move text **horizontally** (right to left).  
  - **Continuous** – The text repeats **seamlessly** with no gaps.  
  - **Staggered** – A new text block **enters only after the previous one disappears**.  

- **Scroll Tickers** – Move text **vertically** (top to bottom or vice versa).  
  - **Up** – Moves text from bottom to top.  
  - **Down** – Moves text from top to bottom.  
  - **Up & Down** – Moves text up and down alternately.  

## Creating a Ticker

1. **Go to the Left Sidebar.**  
2. Click **Crawl Ticker** or **Scroll Ticker**.  
3. Choose the desired **ticker type**.  
4. The ticker appears on the canvas and can be edited in the **Right Sidebar**.  

## Editing a Ticker

1. Select the ticker in the **objects tree**.  
2. Open the **Right Sidebar** to adjust its properties (direction, speed, fonts, colors, background).  

:::caution
Selecting an object by clicking on the canvas doesn’t always work correctly. Please select the ticker directly from the object tree.
:::

## Timing Properties

| **Ticker Type** | **Property**   | **Description** |
|-----------------|----------------|-----------------|
| **Crawl**       | Crawl Speed    | Adjusts the speed of horizontal movement independent of text or ticker size. |
| **Scroll**      | Duration       | Defines how long the scroll effect takes. |
| **Scroll**      | Delay          | Adds a delay before the text starts moving. |

- **Play/stop control** – Each ticker can be controlled separately.  

## Ticker Content

Tickers can contain **multiple text entries** that are either:  

- **fixed** (entered manually), or  
- **dynamic** (loaded from a data source, e.g. JSON feed).  

## Deleting a Ticker

1. **Right-click** on the ticker in the **objects tree**.  
2. Select **Delete** from the menu.  

<!-- 
## Known Issues & Limitations

🚧 **Current Issues in Tickers:**  

- **Tickers occasionally freeze** – Refreshing the **timeline** resolves this.  
- **Tickers using Data Sources flicker in the editor** – The exported version works correctly.  
- **Hidden tickers in the editor still appear in the export.**  
- **IsEditable fields generate automatic class names**, which **cannot currently be changed**.  
  - ✅ **Planned for Ticker v2:** Customizable class names.  

## Example Metadata Structure

Tickers store text content in a structured format. Below is an example of **ticker metadata in JSON**:  

```html
<meta property='JSONparams' content='$$[
  { "NameNM": "text-0", "Value": "{di/0} 0 (1)", "Kind": null },
  { "NameNM": "text-1", "Value": "{di/1} 1 (2)", "Kind": null },
  { "NameNM": "text-2", "Value": "{di/0} 0 (3)", "Kind": null },
  { "NameNM": "text-3", "Value": "{di/1} 1 (4)", "Kind": null },
  { "NameNM": "text-4", "Value": "Dino {di/0} 0 🦕 (5)", "Kind": null },
  { "NameNM": "text-5", "Value": "Lorem ipsum (6)", "Kind": null },
  { "NameNM": "text-6", "Value": "{di/1} 🦖 (7)", "Kind": null },
  { "NameNM": "text-7", "Value": "Start (8)", "Kind": null },
  { "NameNM": "text-8", "Value": "End (9)", "Kind": null }
]$$'> 
