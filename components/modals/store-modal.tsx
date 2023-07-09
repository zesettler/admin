'use client';

import { Modal } from "@/components/ui/modal";
import { useStoreModal} from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    <Modal
        title="Create Store"
        description="Add a new store to manage products and categories"
        isOpen={false}
        onClose={() => {}}
    >
        Future Create Store Form
    </Modal>
}