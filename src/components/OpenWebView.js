import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const OpenWebView = () => {
    return (
        <WebView
            source={{ uri: 'http://istech.vn/'}}
        />
    );
}


export default OpenWebView;