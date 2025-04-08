import * as React from 'react';
import {ViewStyle} from 'react-native';
import styles from './style';
import CodeEditor, {
  CodeEditorSyntaxStyles,
  Props as CodeEditorProps,
} from '@rivascva/react-native-code-editor';

type SyntaxStyleType = keyof typeof CodeEditorSyntaxStyles;

interface CustomCodeEditorProps extends Omit<CodeEditorProps, 'syntaxStyle'> {
  language?: string;
  showLineNumbers?: boolean;
  initialValue?: string;
  syntaxStyle?: SyntaxStyleType;
  style?: ViewStyle;
}

const CustomCodeEditor: React.FC<CustomCodeEditorProps> = ({
  language = 'javascript',
  showLineNumbers = true,
  initialValue = '',
  syntaxStyle,
  style = {},
  ...props
}) => {
  const styleDefault: ViewStyle = {
    ...styles.default,
    ...style,
  };

  return (
    <CodeEditor
      style={styleDefault}
      language={language}
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
};

CustomCodeEditor.displayName = 'CustomCodeEditor';

export default CustomCodeEditor;
