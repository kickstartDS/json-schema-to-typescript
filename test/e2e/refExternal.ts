export const input = {
  title: 'Referencing',
  type: 'object',
  properties: {
    foo: {
      $ref: 'ReferencedType.json',
    },
  },
  required: ['foo'],
  additionalProperties: false,
}

export const options = {
  declareExternallyReferenced: true,
  $refOptions: {
    resolve: {
      external: false,
      http: false,
      file: false,
    },
  },
}
