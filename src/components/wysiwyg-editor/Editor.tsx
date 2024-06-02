import React, { ComponentProps, FC } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import daynamic from "next/dynamic";
import { SkeletonLoader } from "./EditorSkeleton";

const FroalaEditorComponent = daynamic(
  async () => {
    const imports = await Promise.all([
      import("react-froala-wysiwyg"),
      import("froala-editor/js/plugins/font_size.min.js"),
      import("froala-editor/js/plugins/link.min.js"),
      import("froala-editor/js/plugins/colors.min.js"),
      import("froala-editor/js/plugins/save.min.js"),
      import("froala-editor/js/plugins/paragraph_format.min.js"),
      import("froala-editor/js/plugins/align.min.js"),
      import("froala-editor/js/plugins/emoticons.min.js"),
      import("froala-editor/js/plugins/font_family.min.js"),
      import("froala-editor/js/plugins/lists.min.js"),
      import("froala-editor/js/plugins/quick_insert.min.js"),
      import("froala-editor/css/plugins/quick_insert.min.css"),
      import("froala-editor/js/plugins/video.min.js"),
      import("froala-editor/css/plugins/video.min.css"),
      import("froala-editor/js/plugins/url.min.js"),
      import("froala-editor/js/plugins/table.min.js"),
      import("froala-editor/css/plugins/table.min.css"),
      import("froala-editor/js/plugins/image.min.js"),
      import("froala-editor/js/plugins/char_counter.min.js"),
    ]);
    return imports[0];
  },
  {
    ssr: false,
    loading: () => <SkeletonLoader />,
  }
);
interface IProps extends ComponentProps<typeof FroalaEditorComponent> {}
const Editor: FC<IProps> = (props) => {
  return (
    <div className="relative">
      <FroalaEditorComponent {...props} />
    </div>
  );
};

export default Editor;
