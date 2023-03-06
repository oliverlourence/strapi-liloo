'use strict';

/**
 * portal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::portal.portal');
