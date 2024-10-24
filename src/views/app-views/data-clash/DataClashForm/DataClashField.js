import React from 'react'
import { Input, Row, Col, Card, Form, Select } from 'antd';

const { Option } = Select;

const rules = {
	kodeProyek:     [{ required: true, message: 'Please enter Kode Proyek',}],
	namaProyek:     [{ required: true, message: 'Please enter Nama Proyek',}],
}

const jenisClash = ['Site Clash', 'Hard Clash', 'Soft Clash', '4D Clash', '5D Clash', 'Oprational Clash']
const subKategori = ['Struktur', 'Arsitektur', 'MEP', 'Civil', 'Lahan', 'Bangunan Eksisting, Regulasi, Kesalahan Design']
const tdkLanjut = ['Penyesuaian Lahan, Penyesuaian Design, Penyesuaian Schedule, Penyesuaian Biaya, Site Management, Penyesuaiang Design dan Biaya ']
const namaStatValidasi = ['Perbaikan dan lengkapi deskripsi', 'Perbaikan Gambar', 'Lengkapi gambar dan boundaries pada pada object clash',
	 'Lengkapi penyebab clash', 'Lengkapi rencana tindak lanjut', 'Lengkapi pencegehan', 'Lengkapi action plan', 'Ok']

const DataClashField = () => {
	return (
		<Card title="Data Clash">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="kodeProyek" label="Kode Proyek" rules={rules.kodeProyek}>
					    <Input placeholder="Enter Kode Proyek" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="namaProyek" label="Nama Proyek" rules={rules.namaProyek}>
					    <Input placeholder="Enter Nama Proyek" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="deskripsi" label="Deskripsi" rules={rules.deskripsi}>
					    <Input.TextArea placeholder="Enter Deskripsi" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="namaJenisClash" label="Jenis Clash" rules={rules.divisi}>
						<Select className="w-100" placeholder="Jenis Clash">
							{
								jenisClash.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="namaSubKategori" label="Sub Kategori 1" rules={rules.divisi}>
						<Select className="w-100" placeholder="Jenis Clash">
							{
								subKategori.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="namaSubKategori" label="Sub Kategori 2" rules={rules.divisi}>
						<Select className="w-100" placeholder="Jenis Clash">
							{
								subKategori.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="namaTindakLanjut" label="Tindak Lanjut" rules={rules.divisi}>
						<Select className="w-100" placeholder="Jenis Clash">
							{
								tdkLanjut.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="nilaiDampakValuasi" label="Nilai Dampak Valuasi" rules={rules.managerProyek}>
					    <Input placeholder="Nilai Dmapak Valuasi" />
				    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="penyebab" label="Penyebab" rules={rules.kontakMP}>
					    <Input.TextArea wird placeholder="Enter Penyebab" />
				    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="detailRencanaTndkLanjut" label="Detail Rencana Tindak Lanjut" rules={rules.kontakMP}>
					    <Input.TextArea wird placeholder="Enter Penyebab" />
				    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="namaPicPendamping" label="PIC Pendamping" rules={rules.picBIM}>
					    <Input placeholder="Enter Pic BIM" />
				    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="namaStatusValidasi" label="Status Validasi" rules={rules.divisi}>
						<Select className="w-100" placeholder="Status Validasi">
							{
								namaStatValidasi.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
                

			</Row>
           

		</Card>
	)
}

export default DataClashField
