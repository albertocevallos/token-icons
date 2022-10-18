import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as fs from 'fs'
import * as path from 'path'

class InlineStylesHead extends Head {
  getCssLinks(files) {
    return files.sharedFiles
      .filter((file) => /\.css$/.test(file))
      .filter((file) => fs.existsSync(path.join(process.cwd(), '.next', file)))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${this.context.assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(
              path.join(process.cwd(), '.next', file),
              'utf-8'
            ),
          }}
        />
      ))
  }
}

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <InlineStylesHead />
        <body className="bg-gray-50 font-sans antialiased text-gray-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
