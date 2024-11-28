import PublishStatusFilter from './publish-status-filter';
import SearchFilter from './search-filter';

const GamesFilters = () => {
    return (
        <div className="flex gap-2">
            <SearchFilter />
            <PublishStatusFilter />
        </div>
    );
};

export default GamesFilters;
