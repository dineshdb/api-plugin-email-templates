import seedEmailTemplatesForShop from "./util/seedEmailTemplatesForShop.js";

/**
 * @name startup
 * @summary Called on startup
 * @param {Object} context App context
 * @returns {undefined}
 */
export default async function emailTemplatesStartup(context) {
  const primaryShopId = await context.queries.primaryShopId(context.getInternalContext());

  if(primaryShopId) {
    console.log("Shope was already created, let's register remaining templates.")
    await seedEmailTemplatesForShop(context, primaryShopId);
  }

  context.appEvents.on("afterShopCreate", async (payload) => {
    const { shop } = payload;

    await seedEmailTemplatesForShop(context, shop._id);
  });
}
