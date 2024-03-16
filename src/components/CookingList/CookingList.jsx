
const CookingList = ({item}) => {
    return (
        <tr className="bg-[#28282813] text-[#878787] w-full text-center">
            <td className="px-2 xl:px-12">1</td>
            <td  className="px-2 xl:px-12">{item.recipe_name}</td>
            <td  className="px-2 xl:px-12">{item.preparing_time}</td>
            <td  className="px-2 xl:px-12">{item.calories}</td>
        </tr>
    );
};

export default CookingList;