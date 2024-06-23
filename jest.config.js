module.exports = {
    // 프로젝트의 루트 디렉토리를 기준으로 설정합니다.
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // 이미지 파일 모킹
    },
    transformIgnorePatterns: [
      '/node_modules/', // node_modules는 기본적으로 변환하지 않습니다.
    ],
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
  };