import React from 'react'
 
import PDFViewer from 'pdf-viewer-reactjs'
 
const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: './Resume.pdf',
            }}
        />
    )
}
 
export default ExamplePDFViewer


// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import pdfFile from './Resume.pdf'
// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// // Create Document Component
// const MyDocument = () => (
//   <Document>
      
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );
// export default MyDocument