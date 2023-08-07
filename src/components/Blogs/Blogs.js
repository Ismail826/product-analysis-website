import React from 'react';

const Blogs = () => {
    return (
        <section className="grid grid-rows-3 ml-20">
            <h3 className="pt-5 text-start text-4xl text-indigo-700">What is the purpose of context API?</h3>
            <p className="text-start text-2xl mt-2">
                A React app can use the React Context API to generate global variables
                that can be passed around. This is a better option than "prop drilling,"
                which entails passing props from grandma to child to parent.
            </p>
            <h3 className="pt-3 text-start text-4xl mt-2 text-indigo-700">
                What is semantic tag explain with example?
            </h3>
            <p className="text-start text-2xl">
                Semantic elements have meaningful names that tell the browser and the
                developer about the sort of content and clearly describe its meaning.
                Nonsemantic elements include div and span. It says nothing about what
                it's about form, table, and article are examples of semantic
                elements. Its content is clearly defined.
            </p>
            <h3 className="pt-3 text-start text-4xl ml-2 text-indigo-700">
                What is the difference between inline and inline-block?
            </h3>
            <p className="text-start text-2xl">
                The main distinction between inline-block and display: inline is that
                inline-block allows you to specify the element's width and height. Also,
                when using display: inline, the top and bottom margins and paddings are
                ignored.
            </p>
        </section>
    );
};

export default Blogs;