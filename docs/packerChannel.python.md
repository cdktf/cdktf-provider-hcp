# `hcp_packer_channel`

Refer to the Terraform Registory for docs: [`hcp_packer_channel`](https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel).

# `packerChannel` Submodule <a name="`packerChannel` Submodule" id="@cdktf/provider-hcp.packerChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PackerChannel <a name="PackerChannel" id="@cdktf/provider-hcp.packerChannel.PackerChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel hcp_packer_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannel(
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
  name: str,
  id: str = None,
  iteration: PackerChannelIteration = None,
  project_id: str = None,
  timeouts: PackerChannelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | The slug of the HCP Packer Registry image bucket where the channel should be created in. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the channel being managed. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#id PackerChannel#id}. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.iteration">iteration</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a></code> | iteration block. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where this channel is located in. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.bucketName"></a>

- *Type:* str

The slug of the HCP Packer Registry image bucket where the channel should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#bucket_name PackerChannel#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.name"></a>

- *Type:* str

The name of the channel being managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#name PackerChannel#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#id PackerChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iteration`<sup>Optional</sup> <a name="iteration" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.iteration"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a>

iteration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#iteration PackerChannel#iteration}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where this channel is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#project_id PackerChannel#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannel.PackerChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#timeouts PackerChannel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.putIteration">put_iteration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.resetIteration">reset_iteration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.packerChannel.PackerChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.packerChannel.PackerChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.packerChannel.PackerChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.packerChannel.PackerChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.packerChannel.PackerChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.packerChannel.PackerChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_iteration` <a name="put_iteration" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putIteration"></a>

```python
def put_iteration(
  fingerprint: str = None,
  id: str = None,
  incremental_version: typing.Union[int, float] = None
) -> None
```

###### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putIteration.parameter.fingerprint"></a>

- *Type:* str

The fingerprint of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#fingerprint PackerChannel#fingerprint}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putIteration.parameter.id"></a>

- *Type:* str

The ID of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#id PackerChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `incremental_version`<sup>Optional</sup> <a name="incremental_version" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putIteration.parameter.incrementalVersion"></a>

- *Type:* typing.Union[int, float]

The incremental_version of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#incremental_version PackerChannel#incremental_version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#create PackerChannel#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#default PackerChannel#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#delete PackerChannel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.packerChannel.PackerChannel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#update PackerChannel#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_iteration` <a name="reset_iteration" id="@cdktf/provider-hcp.packerChannel.PackerChannel.resetIteration"></a>

```python
def reset_iteration() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.packerChannel.PackerChannel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.packerChannel.PackerChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannel.PackerChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.packerChannel.PackerChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannel.PackerChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.packerChannel.PackerChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.packerChannel.PackerChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.authorId">author_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.iteration">iteration</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference">PackerChannelIterationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference">PackerChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.iterationInput">iteration_input</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `author_id`<sup>Required</sup> <a name="author_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.authorId"></a>

```python
author_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `iteration`<sup>Required</sup> <a name="iteration" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.iteration"></a>

```python
iteration: PackerChannelIterationOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference">PackerChannelIterationOutputReference</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.timeouts"></a>

```python
timeouts: PackerChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference">PackerChannelTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iteration_input`<sup>Optional</sup> <a name="iteration_input" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.iterationInput"></a>

```python
iteration_input: PackerChannelIteration
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PackerChannelTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a>, cdktf.IResolvable]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.packerChannel.PackerChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PackerChannelConfig <a name="PackerChannelConfig" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  name: str,
  id: str = None,
  iteration: PackerChannelIteration = None,
  project_id: str = None,
  timeouts: PackerChannelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | The slug of the HCP Packer Registry image bucket where the channel should be created in. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.name">name</a></code> | <code>str</code> | The name of the channel being managed. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#id PackerChannel#id}. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.iteration">iteration</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a></code> | iteration block. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where this channel is located in. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The slug of the HCP Packer Registry image bucket where the channel should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#bucket_name PackerChannel#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the channel being managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#name PackerChannel#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#id PackerChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iteration`<sup>Optional</sup> <a name="iteration" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.iteration"></a>

```python
iteration: PackerChannelIteration
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a>

iteration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#iteration PackerChannel#iteration}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where this channel is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#project_id PackerChannel#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.packerChannel.PackerChannelConfig.property.timeouts"></a>

```python
timeouts: PackerChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#timeouts PackerChannel#timeouts}

---

### PackerChannelIteration <a name="PackerChannelIteration" id="@cdktf/provider-hcp.packerChannel.PackerChannelIteration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannel.PackerChannelIteration.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannelIteration(
  fingerprint: str = None,
  id: str = None,
  incremental_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration.property.fingerprint">fingerprint</a></code> | <code>str</code> | The fingerprint of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration.property.id">id</a></code> | <code>str</code> | The ID of the iteration assigned to the channel. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration.property.incrementalVersion">incremental_version</a></code> | <code>typing.Union[int, float]</code> | The incremental_version of the iteration assigned to the channel. |

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-hcp.packerChannel.PackerChannelIteration.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

The fingerprint of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#fingerprint PackerChannel#fingerprint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannelIteration.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#id PackerChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_version`<sup>Optional</sup> <a name="incremental_version" id="@cdktf/provider-hcp.packerChannel.PackerChannelIteration.property.incrementalVersion"></a>

```python
incremental_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The incremental_version of the iteration assigned to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#incremental_version PackerChannel#incremental_version}

---

### PackerChannelTimeouts <a name="PackerChannelTimeouts" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannelTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#create PackerChannel#create}. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#default PackerChannel#default}. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#delete PackerChannel#delete}. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#update PackerChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#create PackerChannel#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#default PackerChannel#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#delete PackerChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.57.0/docs/resources/packer_channel#update PackerChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PackerChannelIterationOutputReference <a name="PackerChannelIterationOutputReference" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannelIterationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resetFingerprint">reset_fingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resetIncrementalVersion">reset_incremental_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fingerprint` <a name="reset_fingerprint" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incremental_version` <a name="reset_incremental_version" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.resetIncrementalVersion"></a>

```python
def reset_incremental_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.incrementalVersionInput">incremental_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.incrementalVersion">incremental_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incremental_version_input`<sup>Optional</sup> <a name="incremental_version_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.incrementalVersionInput"></a>

```python
incremental_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `incremental_version`<sup>Required</sup> <a name="incremental_version" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.incrementalVersion"></a>

```python
incremental_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.packerChannel.PackerChannelIterationOutputReference.property.internalValue"></a>

```python
internal_value: PackerChannelIteration
```

- *Type:* <a href="#@cdktf/provider-hcp.packerChannel.PackerChannelIteration">PackerChannelIteration</a>

---


### PackerChannelTimeoutsOutputReference <a name="PackerChannelTimeoutsOutputReference" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import packer_channel

packerChannel.PackerChannelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.packerChannel.PackerChannelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PackerChannelTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcp.packerChannel.PackerChannelTimeouts">PackerChannelTimeouts</a>, cdktf.IResolvable]

---



