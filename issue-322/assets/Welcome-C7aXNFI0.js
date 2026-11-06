import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-ex5UNGop.js";import{i as n,r}from"./react-CnV19qWl.js";import{l as i,o as a}from"./blocks-HPo1nIOU.js";var o,s;function c(){return(c=e((()=>{o=t(),s=({name:e,type:t,description:n,required:r=!1,defaultValue:i})=>(0,o.jsxs)(`article`,{className:`dual-editor-prop-card`,children:[(0,o.jsxs)(`div`,{className:`dual-editor-prop-card__heading`,children:[(0,o.jsx)(`code`,{children:e}),(0,o.jsx)(`span`,{className:`dual-editor-prop-card__badge${r?` dual-editor-prop-card__badge--required`:``}`,children:r?`Required`:`Optional`})]}),(0,o.jsxs)(`div`,{className:`dual-editor-prop-card__meta`,children:[(0,o.jsx)(`code`,{children:t}),i&&(0,o.jsxs)(`span`,{children:[`Default `,(0,o.jsx)(`code`,{children:i})]})]}),(0,o.jsx)(`p`,{children:n})]})})))()}function l(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[`
`,`
`,(0,d.jsx)(a,{title:`Introduction/Welcome`}),`
`,(0,d.jsx)(t.h1,{id:`welcome-to-the-ows-editor`,children:`Welcome to the OWS Editor`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.strong,{children:`Open Workflow Specification Editor`}),` brings text and diagram editing together in one embeddable React component. Edit a workflow as JSON or YAML and see the diagram update alongside it; diagram edits are synchronized back to the text editor.`]}),`
`,(0,d.jsx)(t.h2,{id:`get-started`,children:`Get started`}),`
`,(0,d.jsxs)(t.p,{children:[`Install `,(0,d.jsx)(t.code,{children:`@openworkflowspec/dual-editor`}),` and its workspace dependencies, then provide workflow content and a language service worker. The component fills its parent, so give the parent a definite height.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useState } from "react";
import { DualEditor } from "@openworkflowspec/dual-editor";
import LanguageServiceWorker from "@openworkflowspec/text-editor/worker?worker";
import "@openworkflowspec/dual-editor/styles.css";

const initialWorkflow = \`{
  "document": {
    "dsl": "1.0.0",
    "namespace": "examples",
    "name": "hello-world",
    "version": "1.0.0"
  },
  "do": [{ "log": { "message": "Hello, World!" } }]
}\`;

function WorkflowEditor() {
  const [content, setContent] = useState(initialWorkflow);

  return (
    <div style={{ height: "600px" }}>
      <DualEditor
        content={content}
        createLanguageServiceWorker={() => new LanguageServiceWorker()}
        onContentChange={setContent}
      />
    </div>
  );
}
`})}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(t.h3,{id:`workflow`,children:`Workflow`}),`
`,(0,d.jsxs)(`div`,{className:`dual-editor-prop-grid`,children:[(0,d.jsx)(s,{name:`content`,type:`string`,required:!0,description:`Workflow definition as JSON or YAML.`}),(0,d.jsx)(s,{name:`createLanguageServiceWorker`,type:`() => Worker`,required:!0,description:`Creates the language service worker used by the Text Editor.`})]}),`
`,(0,d.jsx)(t.h3,{id:`editor-options`,children:`Editor options`}),`
`,(0,d.jsxs)(`div`,{className:`dual-editor-prop-grid`,children:[(0,d.jsx)(s,{name:`language`,type:`TextEditorLanguage`,defaultValue:`json`,description:`Text Editor requires a language. Dual Editor defaults to JSON.`}),(0,d.jsx)(s,{name:`isReadOnly`,type:`boolean`,defaultValue:`false`,description:`Makes both editors read only.`}),(0,d.jsx)(s,{name:`locale`,type:`string`,defaultValue:`en`,description:`Diagram Editor requires a locale. Dual Editor defaults to English.`}),(0,d.jsx)(s,{name:`colorMode`,type:`ColorMode`,defaultValue:`system`,description:`Color mode passed to both editors.`})]}),`
`,(0,d.jsx)(t.h3,{id:`change-notifications`,children:`Change notifications`}),`
`,(0,d.jsxs)(`div`,{className:`dual-editor-prop-grid`,children:[(0,d.jsx)(s,{name:`onContentChange`,type:`(content: string) => void`,description:`Called when either editor changes the workflow content.`}),(0,d.jsx)(s,{name:`onSplitChange`,type:`(split: number) => void`,description:`Called with the text pane size percentage after changes.`})]}),`
`,(0,d.jsxs)(t.p,{children:[`Use the `,(0,d.jsx)(t.strong,{children:`Features`}),` section to explore JSON, YAML, read-only, empty, and invalid workflow examples.`]}),`
`,(0,d.jsxs)(t.p,{children:[`For more information, visit the `,(0,d.jsx)(t.a,{href:`https://github.com/open-workflow-specification/editor`,rel:`nofollow`,children:`GitHub repository`}),`.`]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),i(),c()})))()}f();export{u as default};