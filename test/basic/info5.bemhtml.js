block('b-bla')(
  tag()('span'),
  mod('0-mode', 'v2').tag()('a'),
  mix()(function() { return [{ elemMods: { m2: 'v2' } }]; }),
  js()(true)
)
