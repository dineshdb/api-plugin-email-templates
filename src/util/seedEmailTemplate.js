import Logger from "@reactioncommerce/logger";
import Random from "@reactioncommerce/random";

/**
 * @param {Object} context App context
 * @param {String} shopId Shop ID
 * @param {Object} doc The template document
 * @param {bool} force Whether to force update the doc if one exists
 * @returns {undefined}
 */
export default async function seedEmailTemplate(context, shopId, doc, force = false) {
  const { Templates } = context.collections;

  const existing = await Templates.findOne({ language: doc.language, name: doc.name, shopId, type: "email" });
  if(existing && force) {  
    Logger.debug(`Updating database with email template "${doc.name}" for shop ${shopId}`);
	  const template = {
		  ...doc,
		  _id: existing._id,
		  parser: "handlebars",
		  shopId,
		  type: "email"  
	  }

	  await Templates.replaceOne({ _id: existing._id }, template, { upsert: true });
  } else {
    Logger.debug(`Seeding database with default email template "${doc.name}" for shop ${shopId}`);
    await Templates.insertOne({
      ...doc,
      _id: Random.id(),
      parser: "handlebars",
      shopId,
      type: "email"
    });
  }
}

