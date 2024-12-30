import { SnippetPageClient } from "./SnippetPageClient";

export function SnippetPageServer() {
  // fetch default values
  // fetch saved inputs
  // server-side state

  const pageDefaults = { menuNames: "file\nedit\nselection\nview" };

  return <SnippetPageClient defaults={pageDefaults} />;
}
