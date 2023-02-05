import React from 'react';
import { getAllSolutions } from '../../dummy-data/solutions';
import Solution from './Solution';

const SolutionList = () => {

    const solutions = getAllSolutions();

    return (
        <div>
            <h2 className='text-center text-primary font-bold text-3xl'>Solutions That We Provide</h2>
            {/* <p className='text-center font-bold text-secondary'>We have worked together on inspiring projects</p> */}
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
                {
                    solutions.map(solution => <Solution solution={solution}></Solution>)
                }
            </div>
        </div>
    );
};

export default SolutionList;