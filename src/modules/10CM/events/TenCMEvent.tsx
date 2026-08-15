export default function TenCMEvent() {
    const [Tencm_e_number_input1, SetTencm_e_number_input1] = useState<string>("");

    const Tencm_e_number_input1_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input1(e.target.value);
    };



    return (
        <div className="TenCMEvent_full">
            <input type="text" name="Tencm_e_number_input1" value={Tencm_e_number_input1} onChange={Tencm_e_number_input1_change} />
        </div>
    );
}
