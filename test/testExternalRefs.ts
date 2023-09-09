import test from 'ava'

import {pascalCase} from 'pascal-case'
import {getSchemaName} from '@kickstartds/jsonschema-utils/dist/helpers.js'

import {link} from '../src/linker.js'
import {compile} from '../src/index.js'
import {input, options} from './e2e/refExternal.js'

export function run() {
  test('should correctly generate TypeScript typings from JSON schema with $ref, and declareExternallyReferenced false', async t => {
    const schema = link(input) as any
    t.snapshot(await compile(schema, pascalCase(getSchemaName(schema.$id)), options), 'This will not match')
  })
}
