import { View, TextInput, Button } from 'react-native';
import { WebView } from'react-native-webview';
import React, { useState } from 'react';

const HTMLMakerApp = () => {
  const [html, setHtml] = useState('');

  const handleGenerateHTML = () => {
    // Generate the HTML based on the entered content
    const generatedHTML = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${html}
    </body>
    </html>`;
    setHtml(generatedHTML);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 200, padding: 10 }}
        multiline
        placeholder="Enter HTML content"
        value={html}
        onChangeText={setHtml}
      />
      <Button title="Generate HTML" onPress={handleGenerateHTML} style={{  marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "orange",}}/>
      {html && (
        <WebView
          originWhitelist={['*']}
          source={{ html }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

r

export default HTMLMakerApp;



