import React from "react";
import { Typography } from "../../../lib/components";
import Header from "../Header";

const Text = () => {
  return (
    <div className="w-full">
      <Header title="Typography" />

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Headings</h2>
            <div className="flex flex-col gap-5">
              <Typography style="h1">h1. Heading</Typography>
              <Typography style="h2">h2. Heading</Typography>
              <Typography style="h3">h3. Heading</Typography>
              <Typography style="h4">h4. Heading</Typography>
              <Typography style="h5">h5. Heading</Typography>
              <Typography style="h6">h6. Heading</Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Text Styles</h2>
            <div className="flex flex-col gap-5">
              <Typography style="body1">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur
              </Typography>
              <Typography style="body2">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur
              </Typography>
              <Typography style="body3">
                body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur
              </Typography>
              <Typography style="body3" component="del">
                Represents a range of text that has been deleted from a
                document.
              </Typography>
              <Typography style="body3" component="ins">
                Represents a range of text that has been added to a document.
              </Typography>
              <Typography style="body3" component="u">
                This is rendered by default as a simple solid underline.
              </Typography>
              <Typography style="body3" component="i">
                Represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others.
              </Typography>
              <Typography style="body3" component="em">
                Marks text that has stress emphasis
              </Typography>
              <Typography style="body3" component="strong">
                Indicates that its contents have strong importance, seriousness, or urgency.
              </Typography>
              <Typography style="body3" component="b">
                Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.
              </Typography>
              <Typography style="h4" component="code">
                Code
              </Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Font Weights</h2>
            <div className="flex flex-col gap-5">
              <Typography style="h1" weight="black">
                Typography - 900
              </Typography>
              <Typography style="h1" weight="extrabold">
                Typography - 800
              </Typography>
              <Typography style="h1" weight="bold">
                Typography - 700
              </Typography>
              <Typography style="h1" weight="semibold">
                Typography - 600
              </Typography>
              <Typography style="h1" weight="medium">
                Typography - 500
              </Typography>
              <Typography style="h1" weight="normal">
                Typography - 400
              </Typography>
              <Typography style="h1" weight="light">
                Typography - 300
              </Typography>
              <Typography style="h1" weight="extralight">
                Typography - 200
              </Typography>
              <Typography style="h1" weight="thin">
                Typography - 100
              </Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Line Heights</h2>
            <div className="flex flex-col">
              <h5 className="text-lg tw-leading-tight mb-2">lineHeight="none"</h5>
              <Typography style="body2" lineHeight="none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
              </Typography>
              <h5 className="text-lg tw-leading-tight mt-5 mb-2">lineHeight="tight"</h5>
              <Typography style="body2" lineHeight="tight">
                lineHeight="tight" - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
              </Typography>
              <h5 className="text-lg tw-leading-tight mt-5 mb-2">lineHeight="snug"</h5>
              <Typography style="body2" lineHeight="snug">
                lineHeight="snug" - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
              </Typography>
              <h5 className="text-lg tw-leading-tight mt-5 mb-2">lineHeight="normal"</h5>
              <Typography style="body2" lineHeight="normal">
                lineHeight="normal" - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
              </Typography>
              <h5 className="text-lg tw-leading-tight mt-5 mb-2">lineHeight="relaxed"</h5>
              <Typography style="body2" lineHeight="relaxed">
                lineHeight="relaxed" - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
              </Typography>
              <h5 className="text-lg tw-leading-tight mt-5 mb-2">lineHeight="loose"</h5>
              <Typography style="body2" lineHeight="loose">
                lineHeight="loose" - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
              </Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Text Transform</h2>
            <div className="flex flex-col gap-5">
              <Typography style="body1" textTransform="uppercase">
                Use the uppercase{" "}
                <Typography style="body3" component="code" textTransform="none">
                  uppercase
                </Typography>{" "}
                to uppercase text.
              </Typography>
              <Typography style="body1" textTransform="lowercase">
                Use the lowercase{" "}
                <Typography style="body3" component="code" textTransform="none">
                  lowercase
                </Typography>{" "}
                to lowercase text.
              </Typography>
              <Typography style="body1" textTransform="capitalize">
                Use the capitalize{" "}
                <Typography style="body3" component="code" textTransform="none">
                  capitalize
                </Typography>{" "}
                to capitalize text.
              </Typography>
            </div>
          </div>
          <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
            <h2 className="text-xl">Accessibility</h2>
            <p>
              You can change the underlying element with the component property.
            </p>
            <div className="flex flex-col gap-5">
              <Typography component="h2" style="h1">
                h1 style with h2 tag.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Text;
