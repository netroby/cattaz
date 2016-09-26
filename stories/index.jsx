import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import NormalWikiEditor from '../src/NormalWikiEditor';
import WikiApp from './WikiApp';
import KPT from './KPT';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Normal Wiki', module)
  .add('with preview', () => (
    <NormalWikiEditor />
  ));

storiesOf('Wiki KPT app', module)
  .add('start code block', () => (
    <WikiApp
      markdown={`# KPT

Here is KPT application:

\`\`\`kpt
\`\`\`
`}
      preview={<div>
        <h1>KPT</h1>
        <p>Here is KPT application:</p>
        <KPT />
      </div>}
    />
  ))
  .add('add keep', () => (
    <WikiApp
      markdown={`# KPT

Here is KPT application:

\`\`\`kpt
* KEEP
  * keep1
* PROBLEM
* TRY
\`\`\`
`}
      preview={<div>
        <h1>KPT</h1>
        <p>Here is KPT application:</p>
        <KPT keeps={['keep1']} />
      </div>}
    />
  ))
;