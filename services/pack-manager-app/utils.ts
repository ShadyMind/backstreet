type Separator = 0xffff;
const SEPARATOR = 0xffff;
const packName = 'react-redux';

interface ByteTuple<T extends number> {
  [key: number]: number;
  length: T;
}

new Int16Array<number[]>(
    []
      // hash
      .concat(
        [
          ...'e96db3028f8c761a16c6c194858e44ea5eabf52e0c6111cb542d3384eaf6b89cd6d99712ee5d9f39f77cf59ecad60ef3385f4bfb02ffb4f2de4c0cc34060ee42'
        ].reduce<ByteTuple<64>>((acc, el, i, all) => {
            const last = acc.length - 1;
            if (i % 2 === 0) {
              acc[acc.length] = parseInt(all[i] + all[i + 1], 16);
            }
            return acc;
        }, [])
      )
      .concat(SEPARATOR)
      // timestamp
      .concat([16, 35, 59, 89, 82])
      .concat(SEPARATOR)
      // ip
      .concat('192.168.168.192'.split('.').map(o => parseInt(o, 10)))
      .concat(SEPARATOR)
      // react
      .concat(Array.from({ length: 50 - packName.length }).fill(20))
      .concat([...'react-redux'].map((c) => c.charCodeAt(0)))
      .concat(SEPARATOR)
      // semver
      .concat(SEPARATOR)
      // namespace
      .concat(SEPARATOR)
      // repository
      .concat(SEPARATOR)
)