
// Data for the traveler selection cards
 export const SelectTravelersList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveler in exploration',
        icon: '🚶‍♂️',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon: '👫',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
    id: 4, 
    title: 'Friends',
    desc: 'Friends on an adventure',
    icon: '👯‍♂️', 
    people: '2 to 5 People' 
}
];

// Data for the budget selection cards
export const SelectBudgetList = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💵',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Don\'t worry about cost',
        icon: '💸',
    },
];



export const AI_PROMPT = (form) => {
    
    const { location, days, budget, companions } = form;

    const budgetDetails = SelectBudgetList.find(item => item.title === budget);
    const companionsDetails = SelectTravelersList.find(pass => pass.people === companions);

    return `
    Generate a detailed travel plan in a structured JSON format. The plan must be tailored to the following user preferences:

    **Travel Profile:**
    - **Destination:** ${location}
    - **Duration:** ${days} days
    - **Budget:** The user has selected a **${budget}** budget, which means the plan 
    should **${budgetDetails.desc.toLowerCase()}**. Recommendations should align with this cost level.
    - **Companions:** The user is traveling with **${companions}**, which is a group of **${companionsDetails.people}**.
     The plan must cater to the needs of **${companionsDetails.desc.toLowerCase()}**.

    **Output Requirements:**
    -the travel plan should be made keeping a strict eye on
     the user  location,budget,companions,days.
    - The output must be a valid JSON object.
    - The JSON object must contain a top-level key for each day of the trip,
     from "Day 1" to "Day ${days}".
    - Each day's object should contain the following keys:
        - "Morning": A suggested activity.
        - "Afternoon": A suggested activity.
        - "Evening": A suggested activity or dining recommendation.
    - All suggestions must be relevant to the specified location, budget, and number of companions.
    - The itinerary should be logically organized to minimize travel time between locations on each day.

    Return only the JSON object, with no additional text or explanations.
    `;
};