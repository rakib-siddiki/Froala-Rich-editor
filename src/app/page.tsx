"use client";

import { editorConfig } from "@/components/helpers";
import { Editor } from "@/components/wysiwyg-editor";

export default function Home() {
  const { EDITOR_CONFIG, editorValue, setEditorValue } = editorConfig();
  return (
    <main className="grid min-h-screen place-items-center p-5">
      <Editor
        config={EDITOR_CONFIG}
        tag="textarea"
        model={editorValue}
        onModelChange={setEditorValue}
      />
    </main>
  );
}
