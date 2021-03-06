import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  tagName: "",

  canCreate: false,
  canDelete: false,
  canUpdate: false,
  competencies: null,

  domains: computed('competencies.[]', function() {
    const competencies = this.competencies;
    if(isEmpty(competencies)){
      return [];
    }
    const domains = competencies.filterBy('isDomain');
    const objs = domains.uniq().map(domain => {
      if (! domain.get('id')) {
        return {
          domain,
          competencies: []
        };
      }
      const domainCompetencies = competencies.filter(
        competency => competency.belongsTo('parent').id() === domain.get('id')
      );
      return {
        domain,
        competencies: domainCompetencies.sortBy('title')
      };
    });

    return objs.sortBy('domain.title');
  }),

  actions: {
    changeCompetencyTitle(value, competency) {
      competency.set('title', value);
    }
  }
});
