import * as React from 'react';
import styles from './style';
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor';

function CustomCodeEditor({
  language = 'javascript',
  showLineNumbers = true,
  initialValue = '',
  syntaxStyle,
  style = {},
  ...props
}) {
  const styleDefault = {
    ...styles.default,
    ...style,
  };
  return (
    <CodeEditor
      style={styleDefault}
      language={language || 'javascript'}
      syntaxStyle={
        syntaxStyle
          ? CodeEditorSyntaxStyles[syntaxStyle]
          : CodeEditorSyntaxStyles.atomOneLight
      }
      showLineNumbers={showLineNumbers}
      initialValue={initialValue}
      {...props}
    />
  );
}
export default CustomCodeEditor;
