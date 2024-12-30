import { SnippetPageClient } from "./SnippetPageClient";

export function SnippetPageServer() {
  // fetch default values
  // fetch saved inputs
  // server-side state

  const pageDefaults = { menuNames: ["file", "edit", "selection", "view"] };

  return <SnippetPageClient defaults={pageDefaults} />;
}
