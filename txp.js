/**
 * Textpattern Markup Language pattern
 * @author Craig Campbell
 * @author Jukka Svahn
 */

Rainbow.extend('txp', [
	{
		'name': 'php.txp',
		'matches': {
			2: {
				'language': 'php'
			}
		},
		'pattern': /&lt;txp:php&gt;([\s\S]*?)&lt;\/txp:php&gt;/gm
	},
	{
		'name': 'comment.txp',
		'pattern': /&lt;txp:hide&gt;([\s\S]*?)&lt;\/txp:hide&gt;/gm
	},
	{
		'matches': {
			1: 'support.tag.open',
			2: 'support.tag.close'
		},
		'pattern': /(&lt;txp:)|(\/&gt;)/gm
	},
	{
		'name': 'support.tag',
		'matches': {
			1: 'support.tag',
			2: 'support.tag.special',
			3: 'support.tag-name'
		},
		'pattern': /(&lt;\/?txp:)(\/|)(\w+)/gm
	},
	{
		'matches': {
			1: 'support.attribute'
		},
		'pattern': /(\w+)(?=\=)/g
	},
	{
		'matches': {
			1: 'support.operator',
			2: 'string.value',
		},
		'pattern': /(=)("(?:[^"]|"{2,})*"|'(?:[^']|'{2,})*')/g
	}
], true);