//import axios from "axios";

async function main() {
  // Define the names of pages you want to create
  let pages = [
    "📘 Cover",
    "■ —— ABOUT THIS PROJECT —— ■",
    "💭 Purpose Of This Project",
    "😎 Who Is This For?",
    "🔗 For Development",
    "■ —— WORK IN PROGRESS —— ■",
    "▢ User Flow - v1 - 🔵 In Progress",
    "▢ Wireframing - v1 - 🔵 In Progress",
    "▢ Design - v1 - 🔵 In Progress",
    "■ —— COMPLETED —— ■",
    "▢ User Flow - v1 - 🟢 Completed",
    "▢ Wireframing - v1 - 🟢 Completed",
    "▢ Design - v1 - 🟢 Completed",
    "■ —— INSPIRATIONS & SOURCES —— ■",
    "▢ Concepts",
    "▢ References",
    "■ —— BUILDING BLOCKS —— ■",
    "▢ My Local Components",
    "■ —— GRAVEYARD —— ■",
    "▢ Gone but not forgotten",
  ];

  // Pages to add the frame to
  const pagesToAddFrame = [
    "💭 Purpose Of This Project",
    "😎 Who Is This For?",
    "🔗 For Development",
    "▢ User Flow - v1 - 🔵 In Progress",
    "▢ Wireframing - v1 - 🔵 In Progress",
    "▢ Design - v1 - 🔵 In Progress",
    "▢ User Flow - v1 - 🟢 Completed",
    "▢ Wireframing - v1 - 🟢 Completed",
    "▢ Design - v1 - 🟢 Completed",
    "▢ Concepts",
    "▢ References",
    "▢ My Local Components",
    "▢ Gone but not forgotten",
  ];

  // Rename the current page to "Cover"
  let currentPage = figma.currentPage;
  currentPage.name = "📘 Cover";
  currentPage.backgrounds = [
    {
      type: "SOLID",
      color: { r: 1, g: 0.78, b: 0 }, // FFC700
    },
  ];

  // Add a white frame to the "Cover" page
  const whiteFrame = figma.createFrame();
  whiteFrame.name = "Place Your Cover Here";
  whiteFrame.resize(1600, 960);
  whiteFrame.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  currentPage.appendChild(whiteFrame);

  // Add text to the white frame
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
  const textNode = figma.createText();
  textNode.fontName = { family: "Roboto", style: "Regular" };
  textNode.fontSize = 24;
  textNode.characters =
    "Head over to my Figma Community page and grab this template's assets.\n\n https://www.figma.com/community/file/1282736442677297251/various-template-assets";
  textNode.resize(1000, textNode.height);
  textNode.textAutoResize = "HEIGHT";
  textNode.textAlignHorizontal = "CENTER";
  textNode.textAlignVertical = "CENTER";

  // Center the text within the frame
  textNode.x = (whiteFrame.width - textNode.width) / 2;
  textNode.y = (whiteFrame.height - textNode.height) / 2;

  // Append the text to the frame
  whiteFrame.appendChild(textNode);

  // Zoom fit to viewport
  figma.viewport.scrollAndZoomIntoView([whiteFrame]);

  // Create the new pages
  for (let page of pages.slice(1)) {
    let newPage = figma.createPage();
    newPage.name = page;

    // Set background color based on page name
    switch (page) {
      case "■ —— ABOUT THIS PROJECT —— ■":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 1, g: 0.78, b: 0 }, // FFC700 (Yellow)
          },
        ];
        break;
      case "💭 Purpose Of This Project":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 1, g: 0.78, b: 0 }, // FFC700 (Yellow)
          },
        ];
        break;
      case "😎 Who Is This For?":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 1, g: 0.78, b: 0 }, // FFC700 (Yellow)
          },
        ];
        break;
      case "🔗 For Development":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 1, g: 0.78, b: 0 }, // FFC700 (Yellow)
          },
        ];
        break;
      case "■ —— WORK IN PROGRESS —— ■":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 0.41, g: 0.61, b: 0.97 }, // 699BF7 (Blue)
          },
        ];
        break;
      case "■ —— COMPLETED —— ■":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 0.06, g: 0.66, b: 0.35 }, // 0FA958 (Green)
          },
        ];
        break;
      case "■ —— INSPIRATIONS & SOURCES —— ■":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 1, g: 0.8, b: 0.72 }, // FFCBB7 (Light Orange)
          },
        ];
        break;
      case "■ —— BUILDING BLOCKS —— ■":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 0.8, g: 0.7, b: 0.98 }, // CDB3FA (Light Purple)
          },
        ];
        break;
      case "▢ User Flow - v1 - 🔵 In Progress":
      case "▢ Wireframing - v1 - 🔵 In Progress":
      case "▢ Design - v1 - 🔵 In Progress":
      case "▢ User Flow - v1 - 🟢 Completed":
      case "▢ Wireframing - v1 - 🟢 Completed":
      case "▢ Design - v1 - 🟢 Completed":
      case "▢ Concepts":
      case "▢ References":
      case "▢ My Local Components":
      case "■ —— GRAVEYARD —— ■":
      case "▢ Gone but not forgotten":
        newPage.backgrounds = [
          {
            type: "SOLID",
            color: { r: 0.345, g: 0.361, b: 0.396 }, // 585C65
          },
        ];
        break;
    }

    // Check if page is in the list to add the frame
    if (pagesToAddFrame.includes(page)) {
      const frame = figma.createFrame();
      frame.resize(1512, 982);

      // Customize the frame name based on the page
      if (
        page === "▢ My Local Components" ||
        page === "▢ Gone but not forgotten" ||
        page === "💭 Purpose Of This Project" ||
        page === "😎 Who Is This For?" ||
        page === "🔗 For Development"
      ) {
        frame.name = page;
      } else {
        frame.name = `${page} - MacBook Pro 14"`;
      }

      newPage.appendChild(frame);
    }
  }

  try {
    function toTitleCase(str: string): string {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
    }

    async function createSection(
      sectionName: string,
      descriptionText: string
    ): Promise<FrameNode> {
      // Load the Inter font - Regular and Bold styles
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      await figma.loadFontAsync({ family: "Inter", style: "Bold" });

      const cleanedSectionName = sectionName.replace(/■ —— | —— ■/g, "");
      const titleCasedName = toTitleCase(cleanedSectionName); // Apply the title case transformation here
      const sectionHeader = figma.createText();
      let sectionTitle = titleCasedName + " Section "; // Use titleCasedName here

      sectionHeader.characters = sectionTitle;
      sectionHeader.textAlignHorizontal = "CENTER";
      sectionHeader.fontName = { family: "Inter", style: "Bold" };
      sectionHeader.fontSize = 16;
      sectionHeader.fills = [
        {
          type: "SOLID",
          color: { r: 0x58 / 255, g: 0x5c / 255, b: 0x65 / 255 },
        },
      ];

      const description = figma.createText();
      description.characters = descriptionText;
      description.textAlignHorizontal = "CENTER";
      description.fontName = { family: "Inter", style: "Regular" };
      description.fontSize = 14;
      description.fills = [
        {
          type: "SOLID",
          color: { r: 0x58 / 255, g: 0x5c / 255, b: 0x65 / 255 },
        },
      ];

      const autoLayoutFrame = figma.createFrame();
      autoLayoutFrame.name = cleanedSectionName;
      autoLayoutFrame.layoutMode = "VERTICAL";
      autoLayoutFrame.primaryAxisSizingMode = "AUTO"; // Auto height
      autoLayoutFrame.counterAxisSizingMode = "FIXED"; // Fixed width
      autoLayoutFrame.itemSpacing = 8;
      autoLayoutFrame.primaryAxisAlignItems = "CENTER";
      autoLayoutFrame.counterAxisAlignItems = "CENTER";
      autoLayoutFrame.paddingTop = 21.55; // Padding adjusted based on your style
      autoLayoutFrame.paddingBottom = 21.55; // Padding adjusted based on your style
      autoLayoutFrame.paddingLeft = 21.55; // Padding adjusted based on your style
      autoLayoutFrame.paddingRight = 21.55; // Padding adjusted based on your style
      autoLayoutFrame.cornerRadius = 4.30999231338501; // Corner radius adjusted based on your style
      autoLayoutFrame.resize(300, autoLayoutFrame.height); // Set fixed width of 300px
      autoLayoutFrame.effects = [
        {
          type: "DROP_SHADOW",
          visible: true,
          blendMode: "PASS_THROUGH",
          color: { r: 0, g: 0, b: 0, a: 1 }, // Adjust color as needed
          offset: { x: 4.31, y: 4.31 }, // Adjust offsets as needed
          radius: 0, // Adjust blur as needed
        },
      ];
      autoLayoutFrame.strokes = [
        { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
      ]; // Stroke color
      autoLayoutFrame.strokeWeight = 2.155; // Stroke weight

      // Adjust the width and height of the text to fit within the auto layout frame
      sectionHeader.resize(
        autoLayoutFrame.width -
          (autoLayoutFrame.paddingLeft + autoLayoutFrame.paddingRight),
        sectionHeader.height
      );
      description.resize(
        autoLayoutFrame.width -
          (autoLayoutFrame.paddingLeft + autoLayoutFrame.paddingRight),
        description.height
      );

      autoLayoutFrame.appendChild(sectionHeader);
      autoLayoutFrame.appendChild(description);

      // Create the parent frame
      const parentFrame = figma.createFrame();
      parentFrame.resize(500, 300); // Set the width to 500px and height to 300px
      parentFrame.layoutMode = "VERTICAL";
      parentFrame.primaryAxisSizingMode = "FIXED"; // Force fixed height
      parentFrame.primaryAxisAlignItems = "CENTER";
      parentFrame.counterAxisAlignItems = "CENTER";
      parentFrame.fills = []; // No fill color

      // Center the autoLayoutFrame within the parentFrame
      const yOffset = (parentFrame.height - autoLayoutFrame.height) / 2;
      autoLayoutFrame.y = yOffset;

      parentFrame.appendChild(autoLayoutFrame); // Add the autoLayoutFrame to the parentFrame

      return parentFrame;
    }

    // Map for section names and their descriptions
    const sectionDescriptions = {
      //"📘 Cover":
      // "Head over to my Community page and grab this template's assets. For more details, visit: figma.com/@julianoczkowski",
      "■ —— ABOUT THIS PROJECT —— ■":
        "The secret sauce behind our genius. Dive in, it's not just about pixels, you know!",
      "■ —— WORK IN PROGRESS —— ■":
        "Unfinished symphonies and half-baked pies. Spoiler: It's gonna be epic!",
      "■ —— COMPLETED —— ■":
        "Our hall of fame! 🏆 Where ideas graduate and wear their gowns.",
      "■ —— INSPIRATIONS & SOURCES —— ■":
        "Brain candy and muse juice. See what makes our creative gears grind.",
      "■ —— BUILDING BLOCKS —— ■": "Designer's Lego set! Snap, build, create!",
      "■ —— GRAVEYARD —— ■":
        "Gone but not forgotten. Designs that didn't see the light of the end of the tunnel.",
    };

    for (const [sectionName, description] of Object.entries(
      sectionDescriptions
    )) {
      const page = figma.root.findChild(
        (child) => child.name === sectionName
      ) as PageNode;
      if (page) {
        const section = await createSection(sectionName, description); // Note the await here
        page.appendChild(section);
      }
    }

    figma.currentPage = currentPage;

    // Try to find the frame named "Frame" and fit it into the view
    const targetFrame = currentPage.findOne(
      (node) => node.name === "Frame" && node.type === "FRAME"
    );
    if (targetFrame) {
      figma.viewport.scrollAndZoomIntoView([targetFrame]);
    }
  } catch (error) {
    if (error instanceof Error) {
      // runtime type check
      figma.notify(`Failed to import component: ${error.message}`);
      console.error(error);
    } else {
      figma.notify(`An unknown error occurred.`);
      console.error(error);
    }
  }

  // Notify the user and close the plugin
  figma.notify("🎉 New Pages Added 🎉");
  figma.closePlugin();
}

// Run the main function
main();
