import { useNavStore } from '@/store/nav';
import { ProductCategoryType } from '../model/Charm';
import { motion } from 'framer-motion';

const TabBar = () => {

    const tabList = [ProductCategoryType.ALL, ProductCategoryType.CHARM, ProductCategoryType.KEYCHAIN];

    const { selectedNav, setSelectedTab } = useNavStore();

    return (
        <nav className="w-full h-10 border-b border-zinc-200 justify-between items-end flex bg-white">
            {
                tabList.map((tab) => (
                    <motion.div 
                        key={tab}
                        className={`grow shrink basis-0 h-[37px] p-2 justify-center items-center gap-2 flex ${selectedNav === tab ? 'border-b-2 border-neutral-800' : ''}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 1 }}
                        onClick={() => setSelectedTab(tab)}>
                        <motion.div 
                            className={` ${selectedNav === tab ? 'font-semibold text-neutral-800' : ''} text-center  text-sm`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>{tab}</motion.div>
                    </motion.div>
                ))
            }
        </nav>
    );
};

export default TabBar;