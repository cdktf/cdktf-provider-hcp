# `hcp_packer_channel_assignment`

Refer to the Terraform Registory for docs: [`hcp_packer_channel_assignment`](https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment).

# `packerChannelAssignment` Submodule <a name="`packerChannelAssignment` Submodule" id="@cdktf/provider-hcp.packerChannelAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PackerChannelAssignment <a name="PackerChannelAssignment" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment hcp_packer_channel_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  channel_name: str,
  id: str = None,
  iteration_fingerprint: str = None,
  iteration_id: str = None,
  iteration_version: typing.Union[int, float] = None,
  project_id: str = None,
  timeouts: PackerChannelAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The slug of the HCP Packer Registry bucket where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | The name of the HCP Packer channel being managed. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.iterationFingerprint">iteration_fingerprint</a></code> | <code>str</code> | The fingerprint of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.iterationId">iteration_id</a></code> | <code>str</code> | The ID of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.iterationVersion">iteration_version</a></code> | <code>typing.Union[int, float]</code> | The incremental version of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.bucketName"></a>

- *Type:* str

The slug of the HCP Packer Registry bucket where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#bucket_name PackerChannelAssignment#bucket_name}

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.channelName"></a>

- *Type:* str

The name of the HCP Packer channel being managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#channel_name PackerChannelAssignment#channel_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iteration_fingerprint`<sup>Optional</sup> <a name="iteration_fingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.iterationFingerprint"></a>

- *Type:* str

The fingerprint of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#iteration_fingerprint PackerChannelAssignment#iteration_fingerprint}

---

##### `iteration_id`<sup>Optional</sup> <a name="iteration_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.iterationId"></a>

- *Type:* str

The ID of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#iteration_id PackerChannelAssignment#iteration_id}

---

##### `iteration_version`<sup>Optional</sup> <a name="iteration_version" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.iterationVersion"></a>

- *Type:* typing.Union[int, float]

The incremental version of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#iteration_version PackerChannelAssignment#iteration_version}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the channel is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#project_id PackerChannelAssignment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#timeouts PackerChannelAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationFingerprint">reset_iteration_fingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationId">reset_iteration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationVersion">reset_iteration_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_iteration_fingerprint` <a name="reset_iteration_fingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationFingerprint"></a>

```python
def reset_iteration_fingerprint() -> None
```

##### `reset_iteration_id` <a name="reset_iteration_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationId"></a>

```python
def reset_iteration_id() -> None
```

##### `reset_iteration_version` <a name="reset_iteration_version" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetIterationVersion"></a>

```python
def reset_iteration_version() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignment.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference">PackerChannelAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprintInput">iteration_fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationIdInput">iteration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersionInput">iteration_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprint">iteration_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationId">iteration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersion">iteration_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeouts"></a>

```python
timeouts: PackerChannelAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference">PackerChannelAssignmentTimeoutsOutputReference</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iteration_fingerprint_input`<sup>Optional</sup> <a name="iteration_fingerprint_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprintInput"></a>

```python
iteration_fingerprint_input: str
```

- *Type:* str

---

##### `iteration_id_input`<sup>Optional</sup> <a name="iteration_id_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationIdInput"></a>

```python
iteration_id_input: str
```

- *Type:* str

---

##### `iteration_version_input`<sup>Optional</sup> <a name="iteration_version_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersionInput"></a>

```python
iteration_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PackerChannelAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iteration_fingerprint`<sup>Required</sup> <a name="iteration_fingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationFingerprint"></a>

```python
iteration_fingerprint: str
```

- *Type:* str

---

##### `iteration_id`<sup>Required</sup> <a name="iteration_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationId"></a>

```python
iteration_id: str
```

- *Type:* str

---

##### `iteration_version`<sup>Required</sup> <a name="iteration_version" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.iterationVersion"></a>

```python
iteration_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PackerChannelAssignmentConfig <a name="PackerChannelAssignmentConfig" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  channel_name: str,
  id: str = None,
  iteration_fingerprint: str = None,
  iteration_id: str = None,
  iteration_version: typing.Union[int, float] = None,
  project_id: str = None,
  timeouts: PackerChannelAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The slug of the HCP Packer Registry bucket where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.channelName">channel_name</a></code> | <code>str</code> | The name of the HCP Packer channel being managed. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationFingerprint">iteration_fingerprint</a></code> | <code>str</code> | The fingerprint of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationId">iteration_id</a></code> | <code>str</code> | The ID of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationVersion">iteration_version</a></code> | <code>typing.Union[int, float]</code> | The incremental version of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the channel is located. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The slug of the HCP Packer Registry bucket where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#bucket_name PackerChannelAssignment#bucket_name}

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

The name of the HCP Packer channel being managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#channel_name PackerChannelAssignment#channel_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#id PackerChannelAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iteration_fingerprint`<sup>Optional</sup> <a name="iteration_fingerprint" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationFingerprint"></a>

```python
iteration_fingerprint: str
```

- *Type:* str

The fingerprint of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#iteration_fingerprint PackerChannelAssignment#iteration_fingerprint}

---

##### `iteration_id`<sup>Optional</sup> <a name="iteration_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationId"></a>

```python
iteration_id: str
```

- *Type:* str

The ID of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#iteration_id PackerChannelAssignment#iteration_id}

---

##### `iteration_version`<sup>Optional</sup> <a name="iteration_version" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.iterationVersion"></a>

```python
iteration_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The incremental version of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#iteration_version PackerChannelAssignment#iteration_version}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the channel is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#project_id PackerChannelAssignment#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentConfig.property.timeouts"></a>

```python
timeouts: PackerChannelAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#timeouts PackerChannelAssignment#timeouts}

---

### PackerChannelAssignmentTimeouts <a name="PackerChannelAssignmentTimeouts" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignmentTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#create PackerChannelAssignment#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#default PackerChannelAssignment#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#delete PackerChannelAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.67.0/docs/resources/packer_channel_assignment#update PackerChannelAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PackerChannelAssignmentTimeoutsOutputReference <a name="PackerChannelAssignmentTimeoutsOutputReference" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel_assignment

packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PackerChannelAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.packerChannelAssignment.PackerChannelAssignmentTimeouts">PackerChannelAssignmentTimeouts</a>]

---


