"use client";
import { FroalaOptions } from "froala-editor";
import { useEffect, useState } from "react";

const useEditorConfig = () => {
  const [editorValue, setEditorValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    setEditorValue(localStorage.getItem("savedHtml") ?? "");
  }, [isMounted]);
  const EDITOR_CONFIG: Partial<FroalaOptions> = {
    placeholderText: "Start typing...",
    height: 300,
    saveInterval: 2000,
    linkStyles: {
      "fr-green": "green",
    },
    colorsText: colors,
    colorsBackground: colors,
    fontFamily: standardFontFamilies,
    listAdvancedTypes: true,
    quickInsertEnabled: true,
    toolbarButtons,
    events: {
      "save.before": function (html: string) {
        localStorage.setItem("savedHtml", html);
        return true;
      },
    },
  };
  return { editorValue, setEditorValue, EDITOR_CONFIG };
};

export default useEditorConfig;
const toolbarButtons = [
  "paragraphFormat",
  "bold",
  "italic",
  "underline",
  "strikeThrough",
  "fontFamily",
  "fontSize",
  "textColor",
  "backgroundColor",
  "insertLink",
  "formatOL",
  "formatUL",
  "align",
  "emoticons",
  "insertVideo",
  "insertTable",
  "insertImage",
  "undo",
  "redo",
];
const colors = [
  "#000000", // Black
  "#993300", // Burnt orange
  "#333300", // Dark yellow
  "#003300", // Dark green
  "#003366", // Dark cyan
  "#000080", // Navy blue
  "#333399", // Indigo
  "#333333", // Dark gray
  "#800000", // Maroon
  "#FF6600", // Orange
  "#808000", // Olive
  "#008000", // Green
  "#008080", // Teal
  "#0000FF", // Blue
  "#666699", // Blue-gray
  "#808080", // Gray
  "#FF0000", // Red
  "#FF9900", // Amber
  "#99CC00", // Lime
  "#339966", // Sea green
  "#33CCCC", // Turquoise
  "#3366FF", // Royal blue
  "#800080", // Purple
  "#999999", // Medium gray
  "#FF00FF", // Magenta
  "#FFCC00", // Gold
  "#FFFF00", // Yellow
  "#00FF00", // Lime
  "#00FFFF", // Cyan
  "#00CCFF", // Sky blue
  "#993366", // Medium violet-red
  "#C0C0C0", // Silver
  "#FF99CC", // Pink
  "#FFCC99", // Peach
  "#FFFF99", // Light yellow
  "#CCFFCC", // Light green
  "#CCFFFF", // Light cyan
  "#99CCFF", // Light sky blue
  "#CC99FF", // Lavender
  "#FFFFFF", // White
];
const standardFontFamilies = {
  "Arial,Helvetica,sans-serif": "Arial",
  "Helvetica,sans-serif": "Helvetica",
  "Verdana,Geneva,sans-serif": "Verdana",
  "Tahoma,Geneva,sans-serif": "Tahoma",
  "Trebuchet MS,Helvetica,sans-serif": "Trebuchet MS",
  "'Times New Roman',Times,serif": "Times New Roman",
  "Georgia,serif": "Georgia",
  "Garamond,serif": "Garamond",
  "'Courier New',Courier,monospace": "Courier New",
  "'Brush Script MT',cursive": "Brush Script MT",
  "'Lucida Console',Monaco,monospace": "Lucida Console",
  "'Lucida Sans Unicode','Lucida Grande',sans-serif": "Lucida Sans Unicode",
  "'Comic Sans MS',cursive": "Comic Sans MS",
  "Impact,Charcoal,sans-serif": "Impact",
  "'Palatino Linotype',Palatino,serif": "Palatino Linotype",
  "'Segoe UI',Tahoma,sans-serif": "Segoe UI",
  "Roboto,sans-serif": "Roboto",
  "'Open Sans',sans-serif": "Open Sans",
  "Lato,sans-serif": "Lato",
  "Oswald,sans-serif": "Oswald",
  "Montserrat,sans-serif": "Montserrat",
  "Raleway,sans-serif": "Raleway",
  "Merriweather,serif": "Merriweather",
  "'Playfair Display',serif": "Playfair Display",
  "'Source Sans Pro',sans-serif": "Source Sans Pro",
  "'PT Sans',sans-serif": "PT Sans",
  "Ubuntu,sans-serif": "Ubuntu",
  "'Droid Sans',sans-serif": "Droid Sans",
  "'Roboto Slab',serif": "Roboto Slab",
  "Pacifico,cursive": "Pacifico",
};
