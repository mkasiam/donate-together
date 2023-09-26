const getDonationData = () =>{
    const storedDonations = localStorage.getItem('donation');
    if(storedDonations){
        return JSON.parse(storedDonations);
    }
    return [];
}


const saveDonationData = id =>{
    const storedDonations = getDonationData();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation', JSON.stringify(storedDonations))
    }
}

export { getDonationData, saveDonationData}