/**
 * BLOCK: Hello
 */

import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { TextControl } from '@wordpress/components';

registerBlockType( 'gutenberg-training/hello', {
  title: __( 'Hello' ), // Block title.
	icon: 'admin-site', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Hello' ),
  ],
  attributes: {
    text: {
      type: 'String',
      default: 'Hello'
    }
  },
  edit ( { attributes, setAttributes } ) {
    const { text } = attributes

    return (
      <div>
        <TextControl
          label="Additional CSS Class"
          value={ text }
          onChange={ ( value ) => setAttributes( { text: value } ) }
        />
        { text }
      </div>
    )
  },
  save () {
    return (
      <div>Hello</div>
    )
  }
} )