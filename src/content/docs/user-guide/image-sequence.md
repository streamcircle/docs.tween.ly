---
title: Image Sequence
description: How to create, edit, and manage image sequences.
---

An **image sequence** is a set of images played in succession to create an animation effect. The process of creating a graphics file with an image sequence is nearly identical to creating any other graphics file, with one key difference: 

## Frame Rate Selection

- When creating a new graphics file, a **canvas settings dialog** appears.  
- Select the correct **frame rate**: **25 or 50 frames per second (FPS)** based on the frame rate of your prepared image sequence.
- Choosing the wrong frame rate may cause playback speed issues and affect animation timing.

:::caution
Once selected, the frame rate cannot be changed. If the incorrect frame rate is chosen, you must create a new graphics file with the correct setting.
:::

:::tip
**Why Does Frame Rate Matter?** Higher frame rates (50 FPS) are ideal for fluid animations, but may require more processing power. Lower frame rates (25 FPS) are suitable for simpler sequences and help reduce file size.
:::

## Adding an Image Sequence

1. In the **Left Sidebar**, click **Sequence**.  
2. The **file explorer opens** – select your images and confirm.  
3. The images are **uploaded and sorted by file name**. Upload time depends on file size and internet speed.  
4. Once the sequence is created:  
   - It appears in the **Object Tree** (Left Sidebar).  
   - Each image is assigned a **timeline keyframe** in the **Bottom Panel (Timeline)**.  
5. You can add **multiple image sequences** to a single graphics file. However, large sequences may increase file size, so consider **splitting sequences into separate graphics files** for better performance.  

## Editing an Image Sequence

- Edit an **image sequence object** like any other object in the **Right Sidebar** (adjust width, height, position, etc.).  
- Individual images in the sequence are **edited in the timeline**, where:  
  - **Duration** and **start time** can be adjusted.  
  - Multiple images can be **selected for bulk actions**:  
    - Hold **Ctrl (Windows) / Cmd (Mac)** and click images.  
    - Hold **Shift** and click the first and last image to select all in between.  
  - Selected images can be **removed from the sequence**, creating gaps where nothing plays.  
  - To fill gaps, **extend the duration** of the previous image.  

## Deleting an Image Sequence

An image sequence can be deleted in two ways:  
1. **Deleting the sequence object** in the **Left Sidebar**.  
2. **Removing all images** from the sequence in the **Timeline**.  

## Exporting a Graphics File with an Image Sequence

When exporting a graphics file that contains image sequences, keep in mind how images are stored and accessed:

### 1. Package (Recommended)
- Exports all images in a **single folder** within a **.zip file**.  
- Ensures **consistent playback speed** and does not rely on an internet connection.  

### 2. HTML Export (Online Hosting Required) 
- Generates a **compact HTML file** while **storing image sequences online**.
- This reduces file size but requires a **stable internet connection** and ensures that the exported HTML has access to the online repository where the images are stored.

:::tip
**Which format should you choose?**
- **Use Package** to ensure fast, smooth playback without network dependency.
- **Use HTML** if you want a smaller export file and your images can be stored and accessed online.
:::