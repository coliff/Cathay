<template>
	<b-container fluid id="basic-info">
		<h2 class="my-4 title">基本資料</h2>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="姓名 *"
					label-for="name"
					:description="errmsg.name">
					<b-form-input type="text" id="name"
						name="name"
						required
						placeholder="e.g. 林大豪">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col md="6">
				<b-form-group
					label="英文姓名 *"
					label-for="enName"
					:description="errmsg.enName">
					<b-form-input type="text" id="enName"
						name="enName"
						required
						placeholder="e.g. Jeremy Lin">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="行動電話 *"
					label-for="mobile"
					:description="errmsg.mobile">
					<b-form-input type="tel" id="mobile"
						name="mobile"
						required
						placeholder="e.g. 0912345678">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col md="6">
				<b-form-group
					label="身分證字號 / 居留證號碼 / 護照號碼 *"
					label-for="idNumber"
					:description="errmsg.idNumber">
					<b-form-input type="text" id="idNumber"
						name="idNumber"
						required
						placeholder="e.g. F123456789">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="6">
				<b-form-group
					label="Email *"
					label-for="email"
					:description="errmsg.email">
					<b-form-input type="email" id="email"
						name="email"
						required
						placeholder="e.g. abcdefg@gmail.com">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="2">
				<b-form-group class="no-padding"
					label="生日 *"
					label-for="byear"
					:description="errmsg.birthday">
					<b-input-group append="年">
						<b-form-select id="byear"
							name="byear"
							:value="byear"
							:options="byears"
							required>
						</b-form-select>
					</b-input-group>
				</b-form-group>
			</b-col>
			<b-col md="2">
				<b-input-group append="月">
					<b-form-select id="bmonth"
						name="bmonth"
						v-model:value="bmonth"
						:options="bmonths"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col md="2">
				<b-input-group append="日">
					<b-form-select id="bdate"
						name="bdate"
						:value="bdate"
						:options="bdates"
						required>
					</b-form-select>
				</b-input-group>
			</b-col>
			<b-col md="2">
				<b-form-group
					label="性別 *"
					label-for="gender"
					:description="errmsg.gender">
					<b-form-select id="gender"
						name="gender"
						:value="null"
						:options="genderOptions"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col md="2">
				<b-form-group
					label="兵役狀況 *"
					label-for="military"
					:description="errmsg.military">
					<b-form-select id="military"
						name="military"
						:value="null"
						:options="militaryOptions"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="2">
				<b-form-group
					label="通訊地址 *"
					label-for="cities"
					:description="errmsg.address">
					<b-form-select id="city"
						name="city"
						v-model="city"
						:options="cities"
						required>
					</b-form-select>
				</b-form-group>
			</b-col>
			<b-col md="2">
				<b-form-select id="district"
					name="district"
					v-model:value="district"
					:options="districts"
					required>
				</b-form-select>
			</b-col>
			<b-col md="6">
				<b-form-input type="text" id="address"
					name="address"
					required>
				</b-form-input>
			</b-col>
		</b-row>
		<b-row class="my-1">
			<b-col md="12">
				<b-form-group class="file-upload-btn"
					label="上傳個人照片 *"
					label-for="photo"
					:description="errmsg.photo">
					<b-form-file id="photo"
						name="photo"
						accept=".jpg, .png"
						required
						placeholder="檔案大小不超過 2 Mb">
					</b-form-file>
				</b-form-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import TW from '@/assets/js/TW_district';

export default {
	props: {
		errmsg: Object,
		range: Function
	},
	data() {
		return {
			byear: '2018',
			byears: this.range(1900, 2018),
			bmonth: '1',
			bmonths: this.range(1, 12),
			bdate: '1',
			bdates: this.range(1, 31),
			genderOptions: [
				{
					text: "請選擇",
					value: null,
					disabled: true
				},
				"男性",
				"女性",
				"其他"
			],
			militaryOptions: [
				{
					text: "請選擇",
					value: null,
					disabled: true
				},
				"未役",
				"待役",
				"免役",
				"屆役畢",
				"役畢"
			],
			city: "臺北市",
			cities: Object.keys(TW),
			district: "中正區",
			districts: TW["臺北市"]
		}
	},
	watch: {
		bmonth: function() {
			let prev = this.bdates.length,
				lunarMonths = [4, 6, 9, 11];

			if (prev == 29) {
				if (this.bmonth != 2) {
					this.bdates.push('30');
					if (lunarMonths.indexOf(this.bmonth) == -1) {
						this.bdates.push('31');
					}
				}
			} else if (prev == 30) {
				if (this.bmonth == 2) {
					this.bdates.pop();
				} else if (lunarMonths.indexOf(this.bmonth) == -1) {
					this.bdates.push('31');
				}
			} else {
				if (this.bmonth == 2) {
					this.bdates.pop();
					this.bdates.pop();
				} else if (lunarMonths.indexOf(this.bmonth) != -1) {
					this.bdates.pop();
				}
			}
		},
		city: function() {
			while (this.districts.length > 0) {
				this.districts.pop();
			}
			for (let d of TW[this.city]) {
				this.districts.push(d);
			}
			this.district = this.districts[0];
		}
	}
}
</script>

<style lang="sass" scoped>
	#basic-info
		padding: 0

	@include media-breakpoint-up(md)
		#bmonth,
		#bdate,
		#district,
		#address,
		.custom-select:not(#byear) + .input-group-append
			margin-top: 1.875rem

	@include media-breakpoint-down(md)
		#bmonth,
		#bdate,
		#district,
		#address,
		.custom-select:not(#byear) + .input-group-append
		    margin-bottom: 1rem;
</style>
