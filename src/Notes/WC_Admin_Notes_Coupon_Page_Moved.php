<?php
/**
 * WooCommerce Admin Coupon Page Moved provider.
 *
 * Adds a notice when the store manager access the coupons page via the old WooCommere > Coupons menu.
 *
 * @package WooCommerce Admin
 */

namespace Automattic\WooCommerce\Admin\Notes;

use Automattic\WooCommerce\Admin\Features\CouponsMovedTrait;
use stdClass;
use WC_Data_Store;

defined( 'ABSPATH' ) || exit;

/**
 * WC_Admin_Notes_Coupon_Page_Moved class.
 *
 * @package Automattic\WooCommerce\Admin\Notes
 */
class WC_Admin_Notes_Coupon_Page_Moved {

	use NoteTraits, CouponsMovedTrait;

	const NOTE_NAME = 'wc-admin-coupon-page-moved';

	/**
	 * Initialize our hooks.
	 */
	public function init() {
		if ( ! wc_coupons_enabled() ) {
			return;
		}

		add_action( 'admin_init', [ $this, 'possibly_add_note' ] );
		add_action( 'admin_init', [ $this, 'redirect_to_coupons' ] );
	}

	/**
	 * Checks if a note can and should be added.
	 *
	 * @return bool
	 */
	public static function can_be_added() {
		if ( ! wc_coupons_enabled() || self::has_unactioned_note() ) {
			return false;
		}

		return isset( $_GET[ self::$query_key ] ) && (bool) $_GET[ self::$query_key ]; // phpcs:ignore WordPress.Security.NonceVerification
	}

	/**
	 * Get the note object for this class.
	 *
	 * @return WC_Admin_Note
	 */
	public static function get_note() {
		$note = new WC_Admin_Note();
		$note->set_title( __( 'Coupon management has moved!', 'woocommerce-admin' ) );
		$note->set_content( __( 'Coupons can now be managed from Marketing > Coupons. Dismiss this notice to permanently hide the WooCommerce > Coupons menu item.', 'woocommerce-admin' ) );
		$note->set_type( WC_Admin_Note::E_WC_ADMIN_NOTE_UPDATE );
		$note->set_name( self::NOTE_NAME );
		$note->set_content_data( new stdClass() );
		$note->set_source( 'woocommerce-admin' );
		$note->add_action(
			'dismiss-coupon-page-moved',
			__( 'Dismiss', 'woocommerce-admin' ),
			wc_admin_url( '&action=hide-coupon-menu' ),
			WC_Admin_Note::E_WC_ADMIN_NOTE_ACTIONED,
			true
		);

		return $note;
	}

	/**
	 * Find notes that have not been actioned.
	 *
	 * @return bool
	 */
	protected static function has_unactioned_note() {
		/** @var DataStore $data_store */ // phpcs:disable Generic.Commenting.DocComment
		$data_store = WC_Data_Store::load( 'admin-note' );
		$notes      = $data_store->get_notes(
			[
				'name'   => [ self::NOTE_NAME ],
				'status' => [ 'unactioned' ],
			]
		);

		return ! empty( $notes );
	}

	/**
	 * Safe redirect to the coupon page to force page refresh.
	 */
	public function redirect_to_coupons() {
		/* phpcs:disable WordPress.Security.NonceVerification */
		if (
			! isset( $_GET['page'] ) ||
			'wc-admin' !== $_GET['page'] ||
			! isset( $_GET['action'] ) ||
			'hide-coupon-menu' !== $_GET['action'] ||
			! defined( 'WC_ADMIN_PLUGIN_FILE' )
		) {
			return;
		}
		/* phpcs:enable */
		$this->display_legacy_menu( false );
		wp_safe_redirect( self::get_management_url( 'coupons' ) );
		exit;
	}
}