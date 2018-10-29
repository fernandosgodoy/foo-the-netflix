import { GlobalConfigModule } from './global-config.module';

describe('GlobalConfigModule', () => {
  let globalConfigModule: GlobalConfigModule;

  beforeEach(() => {
    globalConfigModule = new GlobalConfigModule();
  });

  it('should create an instance', () => {
    expect(globalConfigModule).toBeTruthy();
  });
});
