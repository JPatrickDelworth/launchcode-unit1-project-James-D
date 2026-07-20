import { useState } from 'react'
import { expansionInfo } from '../../data/expansion'
import ExpansionCard from './ExpansionCard';
import './ExpansionSection.css'




function ExpansionSection () {
    const [selectedExpansion, setSelectedExpansion] = useState(0);

    return (
            <div className="expansion-section"
                onClick={() => setSelectedExpansion(null)}
            >
                {expansionInfo.map((expansion, index) => (
                    <ExpansionCard
                        key={expansion.name}
                        expansion={expansion}
                        expanded={selectedExpansion === index}
                        onClick={(event) => {
                            event.stopPropagation();
                            setSelectedExpansion(
                                selectedExpansion === index ? null : index
                            );
                        }}
                        />
                ))}
            </div>
    )
}


export default ExpansionSection;