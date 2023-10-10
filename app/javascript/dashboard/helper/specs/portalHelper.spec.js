import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://hub.supportsquad.nl',
        helpCenterURL: 'https://help.supportsquad.nl',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.supportsquad.nl/hc/handbook'
      );
      window.chatwootConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://hub.supportsquad.nl',
        helpCenterURL: 'https://help.supportsquad.nl',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.supportsquad.nl/hc/handbook/articles/article-slug');
      window.chatwootConfig = {};
    });
  });
});
