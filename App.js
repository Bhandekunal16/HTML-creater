
import { View, TextInput, Button } from 'react-native';
import { WebView } from'react-native-webview';
import React, { useState } from 'react';

const HTMLMakerApp = () => {
  const [html, setHtml] = useState('');

  const handleGenerateHTML = () => {
    // Generate the HTML based on the entered content
    const generatedHTML = `<html><body>${html}</body></html>`;
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
      <Button title="Generate HTML" onPress={handleGenerateHTML} />
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

export default HTMLMakerApp;



