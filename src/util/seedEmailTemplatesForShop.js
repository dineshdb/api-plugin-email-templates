import templateDefinitions from "../templates/index.js";
import seedEmailTemplate from "./seedEmailTemplate.js";

const forceUpdateTemplates = process.env.FORCE_UPDATE_TEMPLATES || false;
/**
 * @summary Creates shop-owned email template records from the default templates
 *   that live in the codebase.
 * @param {Object} context App context
 * @param {String} shopId Shop ID
 * @returns {undefined}
 */
export default async function seedEmailTemplatesForShop(context, shopId) {
  const promises = templateDefinitions.map((templateDefinition) => (
    seedEmailTemplate(context, shopId, templateDefinition, forceUpdateTemplates)
  ));

  await Promise.all(promises);
}
