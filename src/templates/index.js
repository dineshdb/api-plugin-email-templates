import coreDefaultTemplate from "./coreDefault.js";
import inviteNewShopMemberTemplate from "./accounts/inviteNewShopMember.js";
import resetPasswordTemplate from "./accounts/resetPassword.js";
import welcomeEmailTemplate from "./accounts/sendWelcomeEmail.js";
import verifyUpdatedEmailTemplate from "./accounts/verifyUpdatedEmail.js";
import verifyEmailTemplate from "./accounts/verifyEmail.js";
import coreOrderNewTemplate from "./orders/new.js";
import coreOrderNewAdminTemplate from "./orders/new-admin.js";
import coreOrderNewExceptionTemplate from "./orders/new-exception.js";

import orderShippedTemplate from "./orders/shipped.js";
import orderRefundedTemplate from "./orders/refunded.js";
import orderItemRefundTemplate from "./orders/itemRefund.js";
import orderCompleted from "./orders/completed.js";
import orderCanceled from "./orders/canceled.js";
import orderFollowup from "./orders/followup.js";

export default [
  /*
   * Default email templates
   * Used when no other template is found
   */
  {
    language: "en",
    title: "Default",
    name: "coreDefault",
    template: coreDefaultTemplate,
    subject: "A message from {{shop.name}}"
  },

  /*
   * Account related email templates
   */

  /*
   * Accounts - Invite Shop member and create new user account
   * When: Admin invites new member to shop
   */
  {
    language: "en",
    title: "Accounts - Invite Shop Member - New User Account",
    name: "accounts/inviteNewShopMember",
    template: inviteNewShopMemberTemplate,
    subject: "You have been invited to join the group \"{{groupName}}\" in the store \"{{shop.name}}\""
  },

  /*
   * Accounts - Reset Password
   * When: User requests to reset their password
   */
  {
    language: "en",
    title: "Accounts - Reset Password",
    name: "accounts/resetPassword",
    template: resetPasswordTemplate,
    subject: "{{shop.name}}: Here's your password reset link"
  },

  /*
   * Accounts - Welcome Email
   * When: New user signs up for an account
   */
  {
    language: "en",
    title: "Accounts - Welcome Email",
    name: "accounts/sendWelcomeEmail",
    template: welcomeEmailTemplate,
    subject: "You're In. Welcome to {{shop.name}}!"
  },

  /*
   * Accounts - Verify Email
   * When: A user signs up
   */
  {
    language: "en",
    title: "Accounts - Verify Account (via LaunchDock)",
    name: "accounts/verifyEmail",
    template: verifyEmailTemplate,
    subject: "{{shopName}}: Please verify your email address"
  },

  /*
   * Accounts - Verify Updated Email
   * When: A user changes their email
   */
  {
    language: "en",
    title: "Accounts - Verify Updated Email Address",
    name: "accounts/verifyUpdatedEmail",
    template: verifyUpdatedEmailTemplate,
    subject: "Verify your new email address"
  },

  /*
   * Order related email templates
   */

  /*
   * Orders - New Order Place
   * When: A user completes the cart checkout flow and a new order is placed
   */
  {
    language: "en",
    title: "Orders - New Order Placed",
    name: "orders/new",
    template: coreOrderNewTemplate,
    subject: "Thank you for your gift order  {{order.referenceId}}"
  },

  {
    language: "en",
    title: "Orders - New Order Placed [Admin]",
    name: "orders/new-admin",
    template: coreOrderNewAdminTemplate,
    subject: "Thank you for your gift order  {{order.referenceId}}"
  },

  {
    language: "en",
    title: "Orders - We had some issues with your gift delivery.",
    name: "orders/new-exception",
    template: coreOrderNewExceptionTemplate,
    subject: "We had some issues with your gift delivery - {{order.referenceId}}"
  },
  /*
   * Orders - Order Shipped
   * When: Admin completes the order flow and item is shipped
   * When: Admin re-sends shipment notification
   */
  {
    language: "en",
    title: "Orders - Order Shipped",
    name: "orders/shipped",
    template: orderShippedTemplate,
    subject: "Your gift order has shipped"
  },

  /*
   * Orders - Order Refunded
   * When: Admin completes the order flow and item is shipped
   * When: Admin re-sends shipment notification
   */
  {
    language: "en",
    title: "Orders - Order Refunded",
    name: "orders/refunded",
    template: orderRefundedTemplate,
    subject: "{{shop.name}}: Confirmation of refund for {{order.referenceId}}"
  },

  {
    language: "en",
    title: "Orders - Order Completed",
    name: "orders/completed",
    template: orderCompleted,
    subject: "We have delivered gifts to your loved ones!"
  },

  {
    language: "en",
    title: "Orders - Order Canceled",
    name: "orders/canceled",
    template: orderCanceled,
    subject: "{{shop.name}}: Order Canceled - {{order.referenceId}}"
  },

  {
    language: "en",
    title: "Orders - Followup",
    name: "orders/followup",
    template: orderFollowup,
    subject: "{{shop.name}}: Hope you had a great experience - {{order.referenceId}}"
  },
  /*
   * Orders - Order Refunded
   * When: Admin completes the order flow and item is shipped
   * When: Admin refunds line items
   */
  {
    language: "en",
    title: "Orders - Order Item Refunded",
    name: "orders/itemRefund",
    template: orderItemRefundTemplate,
    subject: "{{shop.name}}: Refund confirmation - {{order.referenceId}}"
  }
];
