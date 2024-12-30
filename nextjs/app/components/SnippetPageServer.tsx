import { SnippetPageClient } from "./SnippetPageClient";

export function SnippetPageServer() {
  // fetch default values
  // fetch saved inputs
  // server-side state

  const pageDefaults = {
    menuNames: ["file", "edit", "selection", "view"],
    number: 3,
  };

  return <SnippetPageClient defaults={pageDefaults} />;
}
